import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { hangman } from "../src/30-shades-of-PROG1/hangman.js";

describe('hangman', function() {
  it('should determine if word guessed before 6 wrong', function() {
    expect(hangman("apple", ['a','p','l','e'])).to.equal(true);
    expect(hangman("banana", ['a','b','c','d','e','f','g'])).to.equal(false);
  });
});

