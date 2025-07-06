import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { wolvesAlert } from "../src/30-shades-of-PROG1/wolves-alert.js";

describe('wolvesAlert', function() {
  it('should alert sheep before wolf', function() {
    expect(wolvesAlert(["sheep", "sheep", "wolf", "sheep"])).to.equal("Oi! Sheep number 1! You are about to be eaten by a wolf!");
    expect(wolvesAlert(["sheep", "sheep", "sheep", "wolf"])).to.equal("Pls go away and stop eating my sheep");
  });
});

