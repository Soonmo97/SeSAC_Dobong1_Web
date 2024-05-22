package _01_java_practice;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ArrayPractice {
    public static void main(String[] args) {
        List<String> li = new ArrayList<String>();
        Scanner sc = new Scanner(System.in);
        while(true) {
            System.out.println("문자를 입력해주세요. : ");
            String input = sc.nextLine();
            if (input.equals("exit")) {
                for (String el : li) {
                    System.out.println(el);
                }
                return;
            }
            li.add(input);
        }
    }
}
