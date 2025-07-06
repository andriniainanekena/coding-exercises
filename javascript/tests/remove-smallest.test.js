import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { removeSmallest } from "../src/30-shades-of-PROG1/remove-smallest.js";

describe('removeSmallest', function() {
  it('should remove only first smallest element', function() {
    expect(removeSmallest([1, 2, 3])).to.deep.equal([2, 3]);
    expect(removeSmallest([1, 2, 1, 4, 5])).to.deep.equal([2, 1, 4, 5]);
  });
});

