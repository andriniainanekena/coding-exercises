package com.exercises.library;

import java.time.LocalDate;
import java.util.Set;

public class Book {
    int id;
    String title;
    int pageCount;
    LocalDate publicationDate;
    String summary;
    Set<Type> type;
    Author author;

    public Book(int id, String title, int pageCount, LocalDate publicationDate, String summary, Set<Type> type, Author author) {
        this.id = id;
        this.title = title;
        this.pageCount = pageCount;
        this.publicationDate = publicationDate;
        this.summary = summary;
        this.type = type;
        this.author = author;
    }
}