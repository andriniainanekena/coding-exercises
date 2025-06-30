package com.exercises.number;

import java.util.Scanner;

public class NumberAnalyzer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Number Analyzer");
        System.out.println("Enter an integer or 'quit' to exit.");

        boolean running = true;
        while (running) {
            System.out.print("Enter a number: ");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("quit")) {
                running = false;
            } else {
                try {
                    int number = Integer.parseInt(input);

                    System.out.println("Information for number " + number + ":");

                    if (number < 0) {
                        System.out.println(" - The number is negative.");
                    } else if (number > 0) {
                        System.out.println(" - The number is positive.");
                    } else {
                        System.out.println(" - The number is zero.");
                    }

                    if (number % 2 == 0) {
                        System.out.println(" - The number is even.");
                    } else {
                        System.out.println(" - The number is odd.");
                    }

                } catch (NumberFormatException e) {
                    System.out.println("Error: The input is not a valid integer. Please try again.");
                }
            }
            System.out.println();
        }

        scanner.close();
        System.out.println("Program terminated. Goodbye!");
    }
}