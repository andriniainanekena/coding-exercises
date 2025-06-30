package com.exercises.library;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

public class Library {
    int id;
    String name;
    String address;
    String city;
    List<Book> books;

    public Library(int id, String name, String address, String city) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.books = new ArrayList<>();
    }

    public void addBook(Book book) {
        books.add(book);
    }

    public boolean removeBookById(int id) {
        for (Book book : books) {
            if (book.id == id) {
                books.remove(book);
                return true;
            }
        }
        return false;
    }

    public List<Book> listBooksSortedByTitle() {
        List<Book> sortedBooks = new ArrayList<>(books);
        Collections.sort(sortedBooks, new Comparator<Book>() {
            public int compare(Book b1, Book b2) {
                return b1.title.compareTo(b2.title);
            }
        });
        return sortedBooks;
    }

    public List<Book> searchByTitle(String title) {
        List<Book> result = new ArrayList<>();
        for (Book book : books) {
            if (book.title.toLowerCase().contains(title.toLowerCase())) {
                result.add(book);
            }
        }
        return result;
    }

    public List<Book> searchByType(Type type) {
        List<Book> result = new ArrayList<>();
        for (Book book : books) {
            if (book.type.contains(type)) {
                result.add(book);
            }
        }
        return result;
    }

    public List<Book> searchByKeywordInSummary(String keyword) {
        List<Book> result = new ArrayList<>();
        for (Book book : books) {
            if (book.summary != null && book.summary.toLowerCase().contains(keyword.toLowerCase())) {
                result.add(book);
            }
        }
        return result;
    }

    public Set<Author> searchByAuthor(String authorName) {
        Set<Author> result = new HashSet<>();
        for (Book book : books) {
            if (book.author != null && book.author.authorName != null) {
                if (book.author.authorName.toLowerCase().contains(authorName.toLowerCase())) {
                    result.add(book.author);
                }
            }
        }
        return result;
    }
}