import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { sumDiagonals } from "../src/30-shades-of-PROG1/sum-diagonals.js";

describe('sumDiagonals', function() {
  it('should sum both diagonals of square matrix', function() {
    expect(sumDiagonals([[1,2,3],[4,5,6],[7,8,9]])).to.equal(30);
    expect(sumDiagonals([[1,2],[3,4]])).to.equal(10);
  });
});

