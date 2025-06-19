package com.exercises.bank;

public class Account {
    int id;
    float balance;
    Client client;

    public Account(int id, float balance, Client client) {
        this.id = id;
        this.balance = balance;
        this.client = client;
    }

    public void deposit(float amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposit of " + amount + " Ar completed. New balance: " + balance + " Ar");
        } else {
            System.out.println("Invalid amount.");
        }
    }

    public void withdraw(float amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawal of " + amount + " Ar completed. New balance: " + balance + " Ar");
        } else {
            System.out.println("Insufficient funds or invalid amount.");
        }
    }

    public void transfer(float amount, Account recipient) {
        if (amount > 0 && amount <= balance) {
            this.withdraw(amount);
            recipient.deposit(amount);
            System.out.println("Transfer of " + amount + " Ar to " + recipient.client.getFullName() + " completed.");
        } else {
            System.out.println("Transfer failed: insufficient funds or invalid amount.");
        }
    }

    public void displayBalance() {
        System.out.println("Account of " + client.getFullName() + ": " + balance + " Ar");
    }

    public static void main(String[] args) {
        Client peter = new Client(1, "Parker", "Peter", "peter.parker@gmail.com");
        Client jack = new Client(2, "Sparrow", "Jack", "jack.sparrow@gmail.com");

        Account peterAccount = new Account(10101, 5000.0f, peter);
        Account jackAccount = new Account(20202, 2000.0f, jack);

        peterAccount.displayBalance();
        jackAccount.displayBalance();

        peterAccount.deposit(1000);
        peterAccount.withdraw(500);
        peterAccount.transfer(2000, jackAccount);

        peterAccount.displayBalance();
        jackAccount.displayBalance();
    }
}
