package com.exercises.sentences;

public class Sentences {
    private String sentence;
    private final String separator;

    public Sentences() {
        this.sentence = "";
        this.separator = " ";
    }

    public void add(String word) {
        if(sentence.isEmpty()) {
            sentence = word;
        } else {
            sentence = sentence + separator + word;
        }
    }

    public int getLetterCount() {
        return sentence.length();
    }
    public String getSentence() {
        int count = 0;
        for(char c : sentence.toCharArray()) {
            if(Character.isLetter(c)) {
                count++;
            }
        }
        return sentence;
    }

    @Override
    public String toString() {
        return sentence + ".";
    }

    public static void main(String[] args) {
        Sentences s = new Sentences();
        s.add("Hello");
        s.add("World");
        System.out.println(s.sentence);
        System.out.println(s.getLetterCount());
    }
}
