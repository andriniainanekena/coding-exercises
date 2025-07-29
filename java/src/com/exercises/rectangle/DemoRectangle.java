package com.exercises.rectangle;

public class DemoRectangle {
    public static void main(String[] args) {
        Rectangle rectangle1 = new Rectangle(5, 10);

        rectangle1.setWidth(7);
        rectangle1.setHeight(7);
        
        System.out.println("Width: " + rectangle1.getWidth());
        System.out.println("Height: " + rectangle1.getHeight());
        System.out.println("Area: " + rectangle1.getArea());
        System.out.println("Perimeter: " + rectangle1.getPerimeter());
        System.out.println("Is Square: " + rectangle1.isSquare());

        rectangle1.transpose();
        System.out.println("After transposing:");
        System.out.println("Width: " + rectangle1.getWidth());
        System.out.println("Height: " + rectangle1.getHeight());
    }
}
