package lecture.springbootthymeleaf.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HelloController {

    // localhost:8080/hi
    @GetMapping("/hi")
    public String hello(Model model) {
        Hello hello = new Hello();
        String[] fruits = {"apple", "banana", "grape"};
        // model.addAttribute("사용할 변수명", 변수 값);
        model.addAttribute("msg", "hi~~~");
        model.addAttribute("msg2", "<strong>안녕?</strong>");
        model.addAttribute("age", 20);
        model.addAttribute("userType", "Admin"); // Admin, User, 그 외
        model.addAttribute("fruits", fruits);
        model.addAttribute("url", "https://naver.com");
        model.addAttribute("hello", hello);
        return "hi"; // hi.html

    }

    @GetMapping("/prac")
    public String prac01(Model model) {
        model.addAttribute("age", 21);
        return "prac";
    }

    @GetMapping("/people")
    public String prac02(Model model) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("kim", 10));
        people.add(new Person("lee", 20));
        people.add(new Person("hong", 30));
        people.add(new Person("park", 40));
        people.add(new Person("shin", 50));
        model.addAttribute("people", people);
        return "people";
    }

    @AllArgsConstructor // 모든 인자받는 생성자 제공
    @Getter // getter 제공
    class Person {
        private String name;
        private int age;

//        public Person(String name, int age) {
//            this.name = name;
//            this.age = age;
//        }
//
//        public String getName() {
//            return name;
//        }
//
//        public int getAge() {
//            return age;
//        }
    }

    class Hello {
        private String msg = "hi";

        public String getMsg() {
            return msg;
        }
    }

    @GetMapping("/introduce/{name}")
    public String getPrac(
            @PathVariable String name,
            Model model) {
        model.addAttribute("name", name);
        return "prac2";
    }

    @GetMapping("/introduce2")
    public String getPrac2(
            @RequestParam String name,
            @RequestParam int age,
            Model model
    ) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "prac2";
    }

    @GetMapping("")
    public String pracForm(Model model) {
        // 생년월일 세팅을 위한 배열
        String[] yearSet = new String[75];
        int yearSetNum = 1950;
        for (int i = 0; i < 75; i++) {
            yearSet[i] = String.valueOf(yearSetNum++);
        }
        String[] monthSet = new String[12];
        for (int i = 0; i < 12; i++) {
            monthSet[i] = String.valueOf(i + 1);
        }
        String[] daySet = new String[30];
        for (int i = 0; i < 30; i++) {
            daySet[i] = String.valueOf(i + 1);
        }
        model.addAttribute("yearSet", yearSet);
        model.addAttribute("monthSet", monthSet);
        model.addAttribute("daySet", daySet);
        return "pracForm";
    }

    @PostMapping("/res5")
    public String postResult(
            @RequestParam String name,
            @RequestParam String gender,
            @RequestParam String year,
            @RequestParam String month,
            @RequestParam String day,
            @RequestParam String interest,
            Model model
    ) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        String date = year + "-" + month + "-" + day;
        model.addAttribute("date", date);
        model.addAttribute("interest", interest);
        return "pracResult";
    }
}
