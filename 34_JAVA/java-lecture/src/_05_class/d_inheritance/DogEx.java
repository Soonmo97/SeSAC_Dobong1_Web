package _05_class.d_inheritance;

public class DogEx {
    public static void main(String[] args) {
        Dog dog1 = new Dog();
        dog1.sayHello();
        dog1.fetch();
        System.out.println("----dog class makeSound----");
        dog1.makeSound("멍멍");

    //      부모 클래스로 인스턴스 생성
        Animal cat = new Animal();
        System.out.println("---- animal class makeSound ----");
        cat.makeSound("야옹야옹");
    }
}
