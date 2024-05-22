package _01_java_practice.inheritance;

abstract public class Student {
    public String name;
    public String school;
    public int age;
    public int gradNum;

    abstract public void todo();
}

class Kim extends Student {
    public Kim(String name, String school, int age, int gradNum) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.gradNum = gradNum;
        System.out.println("==== " + name + " 학생의 정보 " + "====");
        System.out.println("학교: " + school);
        System.out.println("나이: " + age);
        System.out.println("학번: " + gradNum);
        todo();
    }
    @Override
    public void todo() {
        System.out.println("점심은 김가네 김밥\n");
    }
}
class Baek extends Student {
    public Baek(String name, String school, int age, int gradNum) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.gradNum = gradNum;
        System.out.println("==== " + name + " 학생의 정보 " + "====");
        System.out.println("학교: " + school);
        System.out.println("나이: " + age);
        System.out.println("학번: " + gradNum);
        todo();
    }
    @Override
    public void todo() {
        System.out.printf("점심은 백종원 피자\n");
    }
}

class main3 {
    public static void main(String[] args) {
        Student kim = new Kim("김철수", "ABC 고등학교", 17, 20220001);
        Student back = new Kim("백영희", "XYZ 고등학교", 18, 20220002);
    }
}