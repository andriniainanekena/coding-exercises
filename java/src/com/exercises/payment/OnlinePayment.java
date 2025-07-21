package com.exercises.payment;

public class OnlinePayment {
    public boolean processPayment(PaymentMethod paymentMethod,
                                  float amount) {
        return paymentMethod.pay(amount);
    }
}
