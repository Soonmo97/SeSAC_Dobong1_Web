package springlecture.springbootsecurity.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import springlecture.springbootsecurity.security.CustomAuthFilter;

import java.util.Arrays;

@Configuration // 스프링 설정 파일임을 알리는 어노테이션
@EnableWebSecurity // 해당 클래스에서 spring security 를 사용하기 위한 어노테이션
public class WebSecurityConfig {
    @Autowired
    private CustomAuthFilter customAuthFilter;

    @Bean
    // 비밀번호 암호화
    public BCryptPasswordEncoder passwordEncoder() {
        // 비밀번호 암호화 시 사용될 수 있도록 만듦
        return new BCryptPasswordEncoder();
    }

    @Bean // 메소드에 다는 어노테이션. 스프링 컨테이너가 관리할 수 있도록 등록
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // 예외 처리를 필수로 진행할 수 있어야 함.
        http
            .cors(Customizer.withDefaults()) // cors 설정() (react 서버에서 요청을 보낼 수 있도록 함)
            // withDefaults(): Bean 으로 등록된 corsConfigurationSource 라는 메소드를 찾아서 설정
//            .cors(cors -> cors.configurationSource(corsConfigurationSource())): cors 에 원하는 이름을 지정하고 싶을 때

            .csrf(CsrfConfigurer::disable) // 외부 post, put 요청을 허용하기 위함
            .logout(auth->auth // logout 구현
                .logoutUrl("/auth/logout")
                // /auth/logout 로그아웃 요청 주소 설정
                // 자동으로 session, securityContext 등을 삭제함.
                .logoutSuccessHandler(((request, response, authentication) -> {
                    response.setStatus(200);
                }))
            )
            .authorizeHttpRequests(authorize -> authorize

            .requestMatchers("/auth/**").permitAll()
                    //.requestMatchers("/auth/**", "/abcd", "/aaa").permitAll() : 여러개 지정 가능
            .anyRequest().authenticated() // 위에 걸러지지 않은 api 는 모두 인증을 필요로 함.
            // .permitAll(): 인증없이 접근 가능
            // .hasRole("admin"): 특정 role 이 있어야 접근 가능 (ex. admin)
            // .hasAnyRole("admin", "teacher"): 파라미터로 넘긴 role 중 하나를 만족
        );

        http.addFilterBefore(customAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true);
        config.setAllowedOriginPatterns(Arrays.asList("*")); // 모든 원본에서의 요청을 허용하는 설정
        config.setAllowedMethods(Arrays.asList("HEAD", "POST", "PATCH", "DELETE", "PUT", "GET"));
        config.setAllowedHeaders(Arrays.asList("*")); // 모든 헤더의 요청을 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", config);
//        source.registerCorsConfiguration("/auth", config);

        return source;
    }
}
