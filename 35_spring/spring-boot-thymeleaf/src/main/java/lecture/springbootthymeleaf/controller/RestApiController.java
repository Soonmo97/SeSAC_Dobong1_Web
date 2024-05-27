package lecture.springbootthymeleaf.controller;


import lecture.springbootthymeleaf.dto.UserDTO;
import org.springframework.web.bind.annotation.*;

@RestController // @RestController 어노테이션을 상단에 선언하면 모든 매핑 메소드들이
// @ResponseBody 로 적용
// @RestController 가 아닌 @Controller 로 선언해놓으면
// @ResponseBody 각자 모두 작성해줘야 함.
@RequestMapping("/restapi")
public class RestApiController {

    //
    @GetMapping("/user")
    public String get() {
        String name = "lily";
        int age = 88;
        return name + ", " + age;
    }

    @PostMapping("/user")
    public String post(@RequestBody UserDTO user) {
        // model 연결 후 db 삽입
        return user.getName() + "," + user.getAge();
    }

    @PatchMapping("/user/{id}")
    public String patch(@PathVariable int id, @RequestBody UserDTO user) {
        // model 연결 후 db 수정
        return id + "님의 정보 수정: " + user.getName() + "," + user.getAge();
    }

    @DeleteMapping("/user/{id}")
    public String patch(@PathVariable int id) {
        // model 연결 후 db 삭제
        return id + "님의 정보 삭제";
    }
}
