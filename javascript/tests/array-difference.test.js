import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { arrayDifference } from "../src/30-shades-of-PROG1/array-difference.js";

describe('arrayDifference', function() {
  it('should return elements in first array not in second', function() {
    expect(arrayDifference([1,2,3], [1,3])).to.deep.equal([2]);
    expect(arrayDifference([1,5,10], [])).to.deep.equal([1,5,10]);
    expect(arrayDifference([], [1,2])).to.deep.equal([]);
  });
});

