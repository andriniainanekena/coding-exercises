import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { removeSpaces } from "../src/30-shades-of-PROG1/remove-spaces.js";

describe('removeSpaces', function() {
  it('should remove all spaces', function() {
    expect(removeSpaces("a b c")).to.equal("abc");
    expect(removeSpaces(" no spaces ")).to.equal("nospaces");
    expect(removeSpaces("")).to.equal("");
  });
});

