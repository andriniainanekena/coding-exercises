import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { spliceRemove } from "../src/30-shades-of-PROG1/splice-remove.js";

describe('spliceRemove', function() {
  it('should remove elements from array', function() {
    expect(spliceRemove([1, 2, 3, 4, 5], 1, 2)).to.deep.equal([1, 4, 5]);
    expect(spliceRemove([10, 20, 30], 0, 1)).to.deep.equal([20, 30]);
  });
});

