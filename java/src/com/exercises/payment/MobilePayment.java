package com.exercises.payment;

public class MobilePayment implements PaymentMethod {
    private String phoneNumber = "";

    public MobilePayment(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public boolean pay(float amount) {
        if (amount <= 0) {
            System.out.println("Amount must be positive");
            return false;
        }

        if(phoneNumber == null || phoneNumber.isBlank()) {
            System.out.println("Phone number is required");
            return false;
        }
        return true;
    }
}
