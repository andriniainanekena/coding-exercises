package com.exercises.bank;

public class Client {
    int id;
    String lastName;
    String firstName;
    String email;

    public Client(int id, String lastName, String firstName, String email) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
    }

    public String getFullName() {
        return firstName + " " + lastName;
    }
}
