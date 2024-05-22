package _01_java_practice;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Trycatch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            int sum = 0;
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < arr.length; i++) {
                arr[i] = sc.nextInt();
                sum += arr[i];
            }
            double avg = (double)sum / arr.length;
            System.out.println("배열 요소의 평균: " + avg);
        } catch (InputMismatchException e) {
            System.out.println("정수를 입력해주세요.");
        } catch (ArithmeticException e) {
            System.out.println("잘못된 산술입니다. ");
        }

    }
}
