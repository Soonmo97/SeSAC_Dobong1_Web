package _02_java_practice;

abstract public class Vehicle {
    private String name;
    private int maxSpeed;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    abstract public void move();
}

interface Flyable {
    void fly();
}

class Car extends Vehicle {
    @Override
    public void move() {
        System.out.println("도로를 따라 이동 중");
    }
}

class Airplane extends Vehicle implements Flyable{
    @Override
    public void move() {
        System.out.println("하늘을 날아가는 중");
    }

    @Override
    public void fly() {
        System.out.println("고도 10,000피트에서 비행 중");
    }
}

class ex {
    public static void main(String[] args) {
        Vehicle[] vehicles = new Vehicle[2];
        vehicles[0] = new Car();
        vehicles[1] = new Airplane();
        for (Vehicle el : vehicles) {
            el.move();
            if(el instanceof Airplane) {
                ((Airplane) el).fly();
            }
        }
    }
}
