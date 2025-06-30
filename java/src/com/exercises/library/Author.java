package com.exercises.library;

import java.time.LocalDate;

public class Author {
    int id;
    String firstName;
    String lastName;
    String authorName;
    LocalDate birthDate;
    String gender;
    String country;

    public Author(int id, String firstName, String lastName, String authorName, LocalDate birthDate, String gender, String country) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.authorName = authorName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.country = country;
    }
}
