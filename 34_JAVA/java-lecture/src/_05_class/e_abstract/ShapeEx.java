package _05_class.e_abstract;

import _05_class.a_access_modifier.pack4.C;

public class ShapeEx {
    public static void main(String[] args) {
        Circle c1 = new Circle("red");
        c1.start(); // 추상 클래스에 선언되어있는 일반 메소드
        c1.draw(); // 추상 메소드, 자식 클래스에서 오버라이딩을 통해 구현
        System.out.println("원의 색상은 " + c1.getColor());
    }
}
