import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { reverseEachWord } from "../src/30-shades-of-PROG1/reverse-each-word.js";

describe('reverseEachWord', function() {
  it('should reverse each word in the sentence', function() {
    expect(reverseEachWord("this is a test")).to.equal("siht si a tset");
    expect(reverseEachWord("hello world")).to.equal("olleh dlrow");
  });
});

