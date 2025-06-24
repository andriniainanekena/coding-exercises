import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { countMaxBobsleigh } from "../src/bobsleigh-counter.js";

describe("Bobsleigh sur gazon", function () {

  it("Retourne 3 avec un tableau de 5 lignes contenant plusieurs zones valides", function () {
    expect(countMaxBobsleigh(5, ["....X", "X....", ".....", "..X..", "X...X"])).to.equal(3);
  });

  it("Retourne 0 avec un tableau sans espace suffisant pour un traîneau", function () {
    expect(countMaxBobsleigh(2, ["X.", ".."])).to.equal(0);
  });

  it("Retourne 1 avec un seul espace libre de 4 cases", function () {
    expect(countMaxBobsleigh(4, ["X...", "...X", "..X.", "...."])).to.equal(1);
  });

  it("Retourne 0 avec un tableau vide", function () {
    expect(countMaxBobsleigh(0, [])).to.equal(0);
  });

});

