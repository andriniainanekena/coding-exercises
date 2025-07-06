import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { isPangram } from "../src/30-shades-of-PROG1/is-pangram.js";

describe('isPangram', function() {
  it('should check if sentence is a pangram', function() {
    expect(isPangram("The quick brown fox jumps over the lazy dog")).to.equal(true);
    expect(isPangram("This is not a pangram.")).to.equal(false);
  });
});

