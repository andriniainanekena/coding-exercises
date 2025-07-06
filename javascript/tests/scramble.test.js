import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { scramble } from "../src/30-shades-of-PROG1/scramble.js";

describe('scramble', function() {
  it('should check if str2 can be formed from str1 letters', function() {
    expect(scramble('rkqodlw', 'world')).to.equal(true);
    expect(scramble('cedewaraaossoqqyt', 'codewars')).to.equal(true);
    expect(scramble('katas', 'steak')).to.equal(false);
  });
});

