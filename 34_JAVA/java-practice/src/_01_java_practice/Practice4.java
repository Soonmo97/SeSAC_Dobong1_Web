package _01_java_practice;

import java.util.Scanner;

public class Practice4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("원의 반지름을 입력하세요: ");
        int r = sc.nextInt();
        Circle cir = new Circle(r);
        System.out.println("원의 반지름: " + (double)r);
        System.out.println("원의 넓이: " + cir.calculagteArea());

    }
}

class Circle {
    final int r;

    final static double PI = 3.141592;
    Circle(int r) {
        this.r = r;
    }

    double calculagteArea() {
        return r * r * PI;
    }
}