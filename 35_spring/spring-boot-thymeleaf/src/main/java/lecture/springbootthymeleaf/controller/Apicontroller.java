package lecture.springbootthymeleaf.controller;

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
    @ResponseBody
    public String getRes4() {
        return "hello";
    }

}
