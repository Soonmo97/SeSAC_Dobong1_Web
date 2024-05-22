package _05_class.e_abstract;

public class SquareEx {
    public static void main(String[] args) {
        Square s1 = new Square("정사각형", "blue");
        s1.start(); // 추상 클래스에 선언되어있는 일반 메소드
        s1.draw(); // 추상 메소드, 자식 클래스에서 오버라이딩을 통해 구현
        s1.showType(); // 자식 클래스에서만 있는 일반메소드
        System.out.println("사각형의 색상은 " + s1.getColor());
    }
}
