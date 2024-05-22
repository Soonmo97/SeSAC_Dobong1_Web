package _01_java_practice;

import java.util.Scanner;

public class MethodPractice {
    public static void main(String[] args) {
        int r = 5;
        System.out.printf("반지름이 %d인 원의 넓이: %f \n", r, area(r));
        int w = 4;
        int h = 7;
        System.out.printf("가로 %d, 세로 %d인 직사각형의 넓이: %f\n", w, h, area(w,h));
        System.out.printf("밑변 %d, 높이 %d인 삼각형의 넓이: %f", 6, 3, area(6, 3, "triangle"));
    }

    public static double area (int r) {
        return r * r * Math.PI;
    }

    public static double area (int w, int h) {
        return w * h;
    }

    public static double area (int a, int b, String type) {
        return a * b / 2;
    }

}
