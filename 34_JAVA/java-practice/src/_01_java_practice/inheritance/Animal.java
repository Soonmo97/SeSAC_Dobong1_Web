package _01_java_practice.inheritance;

public class Animal {
    public String type;
    public String name;
    public int age;

    public void makeSound() {
        System.out.println("동물은 소리를 낸다");
    }
}

class Cat extends Animal{
    public Cat(String name, int age) {
        this.type = "고양이";
        this.name = name;
        this.age = age;
    }

    @Override
    public void makeSound() {
        System.out.println(type + " 야옹야옹");
    }
}

class Dog extends Animal {
    public Dog(String name, int age) {
        this.type = "강아지";
        this.name = name;
        this.age = age;
    }

    @Override
    public void makeSound() {
        System.out.println(type + " 멍멍");
    }
}

class main{
    public static void main(String[] args) {
        Cat cat = new Cat("야옹이", 3);
        cat.makeSound();
        Dog dog = new Dog("멍멍이", 4);
        dog.makeSound();
    }
}


