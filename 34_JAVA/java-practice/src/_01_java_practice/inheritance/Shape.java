package _01_java_practice.inheritance;

import java.util.ArrayList;
import java.util.List;

abstract public class Shape {
    public String color;
    public String type;

    abstract public double calculateArea();

    public String getColor() {
        return color;
    }
}

class Circle extends Shape{
    public int radius;
    public Circle(String color, String type, int radius) {
        this.color = color;
        this.type = type;
        this.radius = radius;
    }
    @Override
    public double calculateArea() {
        return radius * radius * Math.PI;
    }
}
class Rectangle extends Shape{
    public int width;
    public int height;

    public Rectangle(String color, String type, int width, int height) {
        this.color = color;
        this.type = type;
        this.width = width;
        this.height = height;
    }
    @Override
    public double calculateArea() {
        return width * height;
    }
}

class ShapeEx{
    public static void main(String[] args) {
        List<Shape> li = new ArrayList<>();
        li.add(new Circle("Red", "Circle", 5));
        li.add(new Rectangle("Blue", "Rectangle", 8, 3));

        for(Shape sh : li) {
            System.out.println("==== "+ sh.type + " 도형의 정보 " + "====");
            System.out.println("도형의 색상: " + sh.getColor());
            System.out.println("도형의 넓이: " + sh.calculateArea());
            System.out.println();
        }
    }
}