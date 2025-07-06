import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { hashRemove } from "../src/30-shades-of-PROG1/hash-remove.js";

describe('hashRemove', function() {
  it('should remove previous char on #', function() {
    expect(hashRemove("abc#d")).to.equal("abd");
    expect(hashRemove("a#bc#d#")).to.equal("");
  });
});

