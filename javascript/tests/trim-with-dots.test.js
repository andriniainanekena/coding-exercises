import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { trimWithDots } from "../src/30-shades-of-PROG1/trim-with-dots.js";

describe('trimWithDots', function() {
  it('should trim string and add dots', function() {
    expect(trimWithDots("hello", 2)).to.equal("he...");
    expect(trimWithDots("test", 10)).to.equal("test");
  });
});

