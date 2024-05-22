package _01_java_practice.inheritance;

public class Vehicle {
    public String brand;
    public String model;
    public int year;

    public void on() {
        System.out.println("차량 시동을 걸었습니다.");
    }


    public void stop() {
        System.out.println("차량을 정지했습니다.\n");
    }
}

class Bus extends Vehicle{
    public Bus(String brand, String model, int year, int passengerCapacity) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.passengerCapacity =passengerCapacity;
        System.out.println("==== Bus 정보 ====");
        System.out.printf("Bus {brand='%s', model='%s', year=%d, passengerCapacity=%d}\n",
                brand, model, year, passengerCapacity);
        on();
        bus();
        stop();
    }
    public int passengerCapacity;

    public void bus() {
        System.out.println("승객을 운송합니다.");
    }

}

class Car extends Vehicle{
    public boolean convertible;
    public Car (String brand, String model, int year, Boolean convertible) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.convertible = convertible;
        System.out.println("==== Car 정보 ====");
        System.out.printf("Car {brand='%s', model='%s', year=%d, convertible=%b}\n",
                brand, model, year, convertible);
        on();
        car();
        stop();
    }

    public void car() {
        System.out.println("주차했습니다.");
    }
}

class Motorcycle extends Vehicle {
    public String licenseType;
    public Motorcycle (String brand, String model, int year, String licenseType) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licenseType = licenseType;
        System.out.println("==== Motorcycle 정보 ====");
        System.out.printf("Motorcycle {brand='%s', model='%s', year=%d, licenseType='%s'}\n",
                brand, model, year, licenseType);
        on();
        motorcycle();
        stop();
    }

    public void motorcycle() {
        System.out.println("올림통을 합니다.");
    }
}

class main2 {
    public static void main(String[] args) {
        Vehicle bus = new Bus("Hyundai", "City Bus", 2022, 30);
        Vehicle car = new Car("Toyota", "Camry", 2023, true);
        Vehicle Mot = new Motorcycle("Harley-Davidson", "Sportster", 2021, "A");
    }
}
