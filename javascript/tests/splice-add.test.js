import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { spliceAdd } from "../src/30-shades-of-PROG1/splice-add.js";

describe('spliceAdd', function() {
  it('should add items into array at index', function() {
    expect(spliceAdd([1, 2, 5], 2, 3, 4)).to.deep.equal([1, 2, 3, 4, 5]);
    expect(spliceAdd([10, 20], 1, 15)).to.deep.equal([10, 15, 20]);
  });
});

