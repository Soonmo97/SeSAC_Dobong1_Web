package _01_java_practice;

import java.util.Scanner;

public class practice1 {
    public static void main(String[] args) {
//        System.out.println("이름을 입력하세요");
//        Scanner sc = new Scanner(System.in);
//        String name = sc.next();
//        System.out.println("나이를 입력하세요");
//        int age = sc.nextInt();
//        System.out.println("안녕하세요! " + name + "님(" + age + "세)");


//        System.out.println("나이를 입력하세요.");
//        Scanner sc = new Scanner(System.in);
//        int age = sc.nextInt();
//
//        if (age > 0 && age < 8 ) {
//            System.out.println("유아");
//        } else if (age > 7 && age < 14) {
//            System.out.println("초등학생");
//        } else if (age > 13 && age < 17) {
//            System.out.println("중학생");
//        } else if (age > 16 && age < 20) {
//            System.out.println("고등학생");
//        } else if (age > 20) {
//            System.out.println("성인");
//        }

        System.out.println("이름을 입력하세요.");
        Scanner sc = new Scanner(System.in);
        String name = sc.next();
        if (name.equals("홍길동")) {
            System.out.println("남자");
        } else if(name.equals("성춘향")) {
            System.out.println("여자");
        } else {
            System.out.println("모르겠어요.");
        }
    }
}
