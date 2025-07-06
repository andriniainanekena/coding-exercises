import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { mixedSort } from "../src/30-shades-of-PROG1/mixed-sort.js";

describe('mixedSort', function() {
  it('should sort numbers first then strings', function() {
    expect(mixedSort([1, "a", 2, "d", "c", 3, 4])).to.deep.equal([1, 2, 3, 4, "a", "d", "c"]);
    expect(mixedSort(["b", 7, 5, "a"])).to.deep.equal([7, 5, "b", "a"]);
  });
});

