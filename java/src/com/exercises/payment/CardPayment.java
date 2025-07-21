package com.exercises.payment;

public class CardPayment implements PaymentMethod {
    private final String cardNumber;

    public CardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCardNumber() {
        return this.cardNumber;
    }

    public boolean pay(float amount) {
        if (amount <= 0) {
            System.out.println("Amount must be positive");
            return false;
        }
        if (cardNumber == null || cardNumber.isBlank()) {
            System.out.println("Card number is required");
            return false;
        }
        return true;
    }
}
