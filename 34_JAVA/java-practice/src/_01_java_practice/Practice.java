package _01_java_practice;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Practice {
        // Rectangle class
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            List<Rectangle> li = new ArrayList<>();
            while (true) {
                System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
                int width = sc.nextInt();
                int height = sc.nextInt();
                if (width == 0 && height == 0) {
                    for (Rectangle el : li) {
                        System.out.println("가로 길이는: " + el.getWidth());
                        System.out.println("세로로 길이는: " + el.getHeight());
                        System.out.println("넓이는: " + el.area());
                        System.out.println("---------------------");
                    }
                    System.out.println("Rectangle 인스턴스의 개수는: " + li.size());
                    return;
                }
                Rectangle rec = new Rectangle(width);
                rec.setHeight(height);
                li.add(rec);
            }
        }

}

class Rectangle {
    private int width;
    private int height;
    Rectangle(int width) {
        this.width = width;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    int area() {
        return width * height;
    }
}
