import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { sumMatrices } from "../src/30-shades-of-PROG1/sum-matrices.js";

describe('sumMatrices', function() {
  it('should sum two matrices of same size', function() {
    expect(sumMatrices([[1,2],[3,4]], [[5,6],[7,8]])).to.deep.equal([[6,8],[10,12]]);
    expect(sumMatrices([[0]], [[1]])).to.deep.equal([[1]]);
  });
});

