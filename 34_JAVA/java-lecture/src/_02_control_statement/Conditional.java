package _02_control_statement;

public class Conditional {
    public static void main(String[] args) {
        int number = 10;

        // if ~ else
        if (number % 2 == 0) {
            System.out.println("짝수");
        } else {
            System.out.println("홀수");
        }

        // if ~ else if
        if (number % 3 == 0) {
            System.out.println("3의 배수");
        } else if (number % 5 == 0) {
            System.out.println("5의 배수");
        } else {
            System.out.println("3의 배수, 5의 배수가 아닙니다.");
        }

        // switch 문
        String dayOfWeek;
        int day = 1;
        switch (day) {
            case 1:
                dayOfWeek = "일요일";
                break;
            case 2:
                dayOfWeek = "월요일";
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                dayOfWeek = "화,수,목,금,토";
                break;
            default:
                dayOfWeek = "잘못된 입력이예요.";
                break;
        }
        System.out.println("오늘은 " + dayOfWeek + "입니다.");

        // string 비교해보기

    }
}
