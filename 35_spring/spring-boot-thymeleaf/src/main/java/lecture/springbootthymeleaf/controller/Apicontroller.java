package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.dto.UserDTO;
import lecture.springbootthymeleaf.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/api") // 경로 지정 localhost:8080/api
public class Apicontroller {

    // 컨트롤러에서 에러가 발생할 경우, ExceptionHandler
    @ExceptionHandler // 존재하지 않는 url 접속(404)
    public String errHandler(Exception e) {
        System.out.println("error" + e.getMessage());
        return "error";
    }

    // GET localhost:8080/api
    @GetMapping("")
    public String get() {
        return "api";
    }

    // GET localhost:8080/api/res1?name={name}&age={age}
//    @GetMapping("/res1")
//    public String getRes1(@RequestParam String name, @RequestParam int age,
//                          Model model) {
//        model.addAttribute("name", name);
//        model.addAttribute("age", age);
//        return "res";
//    }
    @GetMapping("/res1")
    public String getRes1(@RequestParam(value = "name") String nickname, // name 으로 받아온 걸 nickname에 담음
                          // value: (url로 넘겨지는 쿼리 즉 name과 같아야함)
                          // 빈 문자열은 null로 인식해서 작동됨(빈 문자열로 결과)
                          // required 필수 작성 여부
                          @RequestParam(required = false, value = "age") Integer age,
                          // int 는 null 허용 안되서 Integer 사용
                          Model model) {
        model.addAttribute("name", nickname); // name으로 받아온 nickname
        model.addAttribute("age", age);
        return "res";
    }

    // GET localhost:8080/api/res2/{name}/{age}
    @GetMapping({"/res2/{name}", "/res2/{name}/{param2}"})
    public String getRes2(
            @PathVariable String name,
            @PathVariable(value = "param2", required = false) Integer age,
            Model model
    ) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    // Post localhost:8080/api/res3 (name, age)
    @PostMapping("/res3")
    public String postRes(
            @RequestParam String name,
            @RequestParam int age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    @PostMapping("/res3/{param1}")
    public String postRes2(
            @PathVariable String param1,
            @RequestParam String name,
            @RequestParam int age,
            Model model) {
        System.out.println("param1: " + param1);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    @GetMapping("/res4")
    @ResponseBody // 템플릿 파일(랜더링)이 아닌 값 자체를 리턴
    public String getRes4() {
        return "hello";
    }

    @PostMapping("/res4")
    public String postRes4(
//            @ModelAttribute UserDTO user,
            UserDTO user,
            Model model) {
        // @ModelAttribute
        // 객체로 데이터를 전송받게끔 도와줌. 해당 객체의 setter를 이용해서 데이터를 매핑시킴
        // url에 있는 데이터를 매핑
        // 어노테이션 생략 가능
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

//    @PostMapping("/res5")
//    public String postRes5(
//            UserVO user,
//            Model model) {
//        // @ModelAttribute
//        // 객체로 데이터를 전송받게끔 도와줌. 해당 객체의 setter를 이용해서 데이터를 매핑시킴
//        // url에 있는 데이터를 매핑
//        // 어노테이션 생략 가능
//        model.addAttribute("name", user.getName());
//        model.addAttribute("age", user.getAge());
//        return "res";
//    }

    @GetMapping("/res6")
    public String postRes6(
            @ModelAttribute UserDTO user,
            Model model
    ) {
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    // ------------- @RequestBody ------------
    @GetMapping("/res7")
    public String postRes7(
            @RequestBody UserDTO user,
            Model model
            // 오류가 남. Why? body 자체가 없음. get 요청이기 때문에
    ) {
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    @PostMapping("/res8")
    public String postRes8(
            @RequestBody UserDTO user,
            Model model
    ) { // 오류가 남. Why? 일반 폼 전송의 Content-Type 은 application/x-www-form-urlencoded 이기 때문에
        // @RequestBody는 application/json 형태의 Content-Type을 매핑시킬 수 있음.
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    // vo로 테스트 해봐도 둘 다 오류 날 예정
    @PostMapping("/res9")
    @ResponseBody
    public String postRes9(@RequestBody UserDTO user) {
        return user.getName() + "님 환영합니다.";
    }

    @PostMapping("/res10")
    @ResponseBody
    public String postRes9(@RequestBody UserVO user) {
        // @RequestBody 은 dto 객체의 setter를 이용해서 매핑시키는 게 아닌,
        // RequestBody 자체적으로 가지고 있는 메소드로 매핑을 시킴.
        return user.getName() + "님 환영합니다.";
    }
}
