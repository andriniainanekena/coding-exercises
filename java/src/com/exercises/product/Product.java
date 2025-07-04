package com.exercises.product;

public class Product {
    int id;
    String name;
    String description;
    float unitPrice;
    Category category;

    public Product(int id, String name, String description, float unitPrice, Category category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.category = category;
    }

    public void decreasePrice(float percentage) {
        if (percentage > 0 && percentage <= 100) {
            unitPrice -= unitPrice * (percentage / 100);
            System.out.println("Price decreased by " + percentage + "%, new price: " + unitPrice + " Ar");
        } else {
            System.out.println("Invalid percentage");
        }
    }

    public void displayProduct() {
        System.out.println("Product: " + name);
        System.out.println("Description: " + description);
        System.out.println("Unit price: " + unitPrice + " Ar");
        System.out.println("Category: " + category);
    }
    public static void main(String[] args) {
        Product mac = new Product(1, "Mac M1", "SSD 1To - RAM : 16Go", 5_200_000, Category.COMPUTER);
        mac.decreasePrice(20);

        System.out.println();
    }

}
