package _01_java_practice;

import java.util.ArrayList;
import java.util.List;

public class Practice3 {
    public static void main(String[] args) {
        List<Student> li = new ArrayList<>();
        Student st1 = new Student("김새싹", 20231001, 1);
        Student st2 = new Student("박지은", 20231002, 2);
        Student st3 = new Student("이은지", 20231002, 3);
        li.add(st1);
        st1.displayInfo();
        li.add(st2);
        st2.displayInfo();
        li.add(st3);
        st3.displayInfo();
        for(Student st : li) {
            System.out.println("==== 학생 정보 ====");
            System.out.println("이름: " + st.getName());
            System.out.println("학번: " + st.getGradeNum());
            System.out.println("학년: " + st.getGrade() + "\n");
        }
        System.out.printf("총 학생 수는 %d명 입니다.", Student.totalStudents);
    }
}

class Student {
    static int totalStudents;
    String name;
    int gradeNum;
    int grade;

    public Student(String name, int gradeNum, int grade) {
        this.name = name;
        this.gradeNum = gradeNum;
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGradeNum() {
        return gradeNum;
    }

    public void setGradeNum(int gradeNum) {
        this.gradeNum = gradeNum;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public void displayInfo() {
        totalStudents++;
    }
}
