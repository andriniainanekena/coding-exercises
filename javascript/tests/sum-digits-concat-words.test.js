import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { sumDigitsConcatWords } from "../src/30-shades-of-PROG1/sum-digits-concat-words.js";

describe('sumDigitsConcatWords', function() {
  it('should sum numbers and concat strings', function() {
    expect(sumDigitsConcatWords([1, "hello", 2, "world"])).to.deep.equal([3, "hello world"]);
    expect(sumDigitsConcatWords([5, "foo", "bar"])).to.deep.equal([5, "foo bar"]);
    expect(sumDigitsConcatWords(["a", "b", 0])).to.deep.equal([0, "a b"]);
  });
});

