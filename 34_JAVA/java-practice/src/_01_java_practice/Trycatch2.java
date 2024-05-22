package _01_java_practice;

import java.util.*;

public class Trycatch2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("배열 크기를 입력하세요: ");
        try {
            int n = sc.nextInt();

            if (n <= 0) {
                throw new IllegalArgumentException("배열의 크기는 1 이상이어야 합니다.");
            }
            int[] arr = new int[n];

            System.out.printf("%d개의 정수를 입력하세요: \n", n);
            for (int i = 0; i < arr.length; i++) {
                System.out.printf("정수 %d: ", i + 1);
                arr[i] = sc.nextInt();
            }

            ArrayList<Integer> duplicates = findDuplicates(arr);

            if (duplicates.isEmpty()) {
                System.out.println("중복된 요소가 없어요.");
            } else {
                System.out.println("중복된 요소: " + duplicates);
            }

        } catch (InputMismatchException e) {
            System.out.println("정수를 입력해주세요.");
        } catch (IllegalArgumentException e) {
            System.out.println(e.toString());
        } finally {
            sc.close();
        }

    }

    public static ArrayList<Integer> findDuplicates(int[] arr) {
        ArrayList<Integer> duplicates = new ArrayList<>();

        // 중복된 요소를 찾아서 duplicates에 넣기 : duplicates.add(중복된 요소)
        for (int i=0; i<arr.length-1; i++) {
            for (int j=i+1; j<arr.length; j++) {
                if(arr[i] == arr[j] && !duplicates.contains(arr[i])) {
                    duplicates.add(arr[i]);
                }
            }
        }

        return duplicates;
    }
}
