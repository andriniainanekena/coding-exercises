package com.exercises.expenses;

import java.time.LocalDate;

public class RefundableExpense extends Expense {
    private boolean refunded;

    public RefundableExpense(String label, double amount, LocalDate date) {
        super(label, amount, date);
        this.refunded = false;
    }

    public boolean isRefunded() {
        return refunded;
    }

    public void refund() {
        this.refunded = true;
    }

    @Override
    public String toString() {
        return String.format("RefundableExpense{label='%s', amount=%.2f, date=%s, refunded=%s}", 
                getLabel(), getAmount(), getDate(), refunded);
    }
}
