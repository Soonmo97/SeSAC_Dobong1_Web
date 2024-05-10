package _01_basic_syntax;

import java.util.Scanner;

public class InputOutput {
    public static void main(String[] args) {
        System.out.print("안녕하세요? \n"); // \n은 개행문자
        System.out.print("반갑습니다. \t"); // \tap은 탭
        System.out.print("잘 부탁드립니다.");

        // 입력
        Scanner sc = new Scanner(System.in);
        System.out.println("공백으로 구분하여 이름/나이/키/결혼여부를 입력해주세요.");
        String name = sc.next();
        int age = sc.nextInt();
        double height = sc.nextDouble();
        boolean isSingle = sc.nextBoolean();
        sc.close();

        System.out.println("====입력 결과 출력====");
        System.out.println("이름: " + name);
        System.out.println("나이: " + age);
        System.out.println("키: " + height);
        System.out.println("결혼?: " + isSingle);
    }
}
