package com.exercises.expenses;

import java.util.List;
import java.util.stream.Collectors;

public class ExpenseDAO {
    
    public static List<RefundableExpense> getUnrefundedRefundableExpenses(List<Expense> expenses) {
        return expenses.stream()
                .filter(expense -> expense instanceof RefundableExpense)
                .map(expense -> (RefundableExpense) expense)
                .filter(refundable -> !refundable.isRefunded())
                .collect(Collectors.toList());
    }
    
    public static double getTotalRecurringExpensesAmount(List<Expense> expenses) {
        return expenses.stream()
                .filter(expense -> expense instanceof RecurringExpense)
                .mapToDouble(Expense::getAmount)
                .sum();
    }
    
    public static List<String> getLargeExpenseLabels(List<Expense> expenses) {
        return expenses.stream()
                .filter(expense -> expense.getAmount() > 100)
                .map(Expense::getLabel)
                .collect(Collectors.toList());
    }
    
    public static double getTotalExpensesAmount(List<Expense> expenses) {
        return expenses.stream()
                .mapToDouble(Expense::getAmount)
                .sum();
    }
}
