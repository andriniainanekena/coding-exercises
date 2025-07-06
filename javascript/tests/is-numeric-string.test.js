import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { isNumericString } from "../src/30-shades-of-PROG1/is-numeric-string.js";

describe('isNumericString', function() {
  it('should return true for numeric strings', function() {
    expect(isNumericString('12345')).to.equal(true);
  });

  it('should return false for non-numeric strings', function() {
    expect(isNumericString('abcde')).to.equal(false);
  });

  it('should return false for mixed strings', function() {
    expect(isNumericString('1b3d5')).to.equal(false);
  });
});

