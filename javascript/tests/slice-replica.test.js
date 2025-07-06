import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { sliceReplica } from "../src/30-shades-of-PROG1/slice-replica.js";

describe('sliceReplica', function() {
  it('should slice the array correctly', function() {
    expect(sliceReplica([1, 2, 3, 4, 5], 1, 3)).to.deep.equal([2, 3]);
    expect(sliceReplica([1, 2, 3, 4, 5], 2)).to.deep.equal([3, 4, 5]);
    expect(sliceReplica([1, 2, 3, 4, 5], -3, 5)).to.deep.equal([3, 4, 5]);
  });
});

