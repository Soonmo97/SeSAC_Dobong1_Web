package _04_Exception;

// - Error: 시스템이 비정상적인 상황에 발생한 경우
// - 코드에 의해서 수습할 수 없는 심각한 오류
// - OutOfMemoryError, ThreadDeath, ..

import java.util.InputMismatchException;
import java.util.Scanner;

/*
* 일반 예외(Exception, checked Exception), 실행 에외(Runtime Exception/unchecked Exception)
* - 일반 예외
*   - 확인시점: 컴파일 시점, 명시적으로 예외처리 반드시 해야함
*   - IOException, FileNotFoundException
*
* - 실행 예외
*   - 확인시점: 런타임 시점, 예외처리를 강제되지 않지만 정상적인 작동을 위해 예외처리를 해주는 게 좋다.
*   - NullPointException, InputMismatchException
* */
public class ExceptionEx {
    public static String divide(int x, int y) {
        return x + "/" + y + " = " + (x / y);
    }

    public static int getLength(String str) {
        return str.length();
    }

    public static int getValureByIdx(int[] arr, int idx) {
        return arr[idx];
    }
    public static void main(String[] args) {
        System.out.println(divide(6, 2));
//        System.out.println(divide(6, 0));
//        System.out.println("여기까지 나올까요?");

        try {
            System.out.println("나누기 연산 시작!");
            System.out.println(divide(6, 0));
        } catch (ArithmeticException e) {
            //  catch 의 error 부분에는 어떤 에러인지도 명시

            // 방법 1: e.getMessage(): 예외가 발생한 이유만 보여줌
            System.out.println("나누기 중 예외 발생 " + e.getMessage()); // / by zero

            // 방법 2: ex.toString(): 예외 종류를 리턴
            System.out.println("나누기 중 예외 발생 " + e.toString()); // java.lang.ArithmeticException: / by zero
        } finally {
            System.out.println("나누기 연산 종료!");
        }

        //      ##### case 2. null 에 접근 (NullPointerException)
        try {
            System.out.println(getLength("hello"));
            System.out.println(getLength(null));
        } catch (NullPointerException e) {
            System.out.println("단어 길이 연산 중 예외 발생: " + e.getMessage());
            System.out.println("단어 길이 연산 중 예외 발생: " + e.toString());
        }

        // ##### case 3. index 값으로 배열 접근 시 범위에 없는 값으로 접근 (ArrayIndexOutOfBoundsException)
        int[] numbers = {10, 20, 30, 40, 50};
        try {
            System.out.println(getValureByIdx(numbers, 2)); // 30
            System.out.println(getValureByIdx(numbers, numbers.length));
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("배열 인덱싱 중 예외 발생: " + e.getMessage());
            System.out.println("배열 인덱싱 중 예외 발생: " + e.toString());
        }

        //      #### case 4. 입력 형식 예외()
        Scanner sc = new Scanner(System.in);
        try {
            System.out.println("정수를 하나 입력해주세요..");
            int number = sc.nextInt(); // 정수만 입력 받을 수 있다.
            System.out.println("입력한 정수: " + number);
        } catch (InputMismatchException e) {
            System.out.println("입력 형식 예외 발생" + e.getMessage());
            System.out.println("입력 형식 예외 발생" + e.toString());
        }
    }
}

/*
* try {} catch (예외이름 error) {} finally{}
* 1. catch 여러 개 이어서 쓰기 가능.
*   - try {} catch (예외이름1 error) {} catch (예외이름2 error) {} finally {}
* 2. catch 문 하나에 에러 여러 개 받는 것 가능
*   - catch (예외1 | 예외2 error)
*       - 예외처리 구문이 비슷할 때
*       - 두 예외가 상속관계에 있지 않을 때
* */
