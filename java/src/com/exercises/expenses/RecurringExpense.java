package com.exercises.expenses;

import java.time.LocalDate;

public class RecurringExpense extends Expense {
    private String recurrence;

    public RecurringExpense(String label, double amount, LocalDate date, String recurrence) {
        super(label, amount, date);
        if (!recurrence.equals("monthly") && !recurrence.equals("yearly")) {
            throw new IllegalArgumentException("Recurrence must be 'monthly' or 'yearly'");
        }
        this.recurrence = recurrence;
    }

    public String getRecurrence() {
        return recurrence;
    }

    @Override
    public String toString() {
        return String.format("RecurringExpense{label='%s', amount=%.2f, date=%s, recurrence='%s'}", 
                getLabel(), getAmount(), getDate(), recurrence);
    }
}
