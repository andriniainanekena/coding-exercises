import { describe, it } from "mocha";
import { expect } from "chai";
import { reduceDirections } from "../src/direction-reducer.js";

describe("Traversee dans le Far West", function () {

  it("Retourne ['OUEST'] pour ['NORD', 'SUD', 'SUD', 'EST', 'OUEST', 'NORD', 'OUEST']", function () {
    const input = ['NORD', 'SUD', 'SUD', 'EST', 'OUEST', 'NORD', 'OUEST'];
    const expected = ['OUEST'];
    expect(reduceDirections(input)).to.deep.equal(expected);
  });

  it("Retourne ['EST'] pour ['NORD', 'SUD', 'EST', 'OUEST', 'EST']", function () {
    const input = ['NORD', 'SUD', 'EST', 'OUEST', 'EST'];
    const expected = ['EST'];
    expect(reduceDirections(input)).to.deep.equal(expected);
  });

  it("Retourne [] pour une liste vide", function () {
    expect(reduceDirections([])).to.deep.equal([]);
  });

  it("Retourne [] pour ['SUD', 'NORD', 'EST', 'OUEST']", function () {
    const input = ['SUD', 'NORD', 'EST', 'OUEST'];
    const expected = [];
    expect(reduceDirections(input)).to.deep.equal(expected);
  });

  it("Retourne ['NORD', 'EST'] pour ['NORD', 'EST']", function () {
    const input = ['NORD', 'EST'];
    const expected = ['NORD', 'EST'];
    expect(reduceDirections(input)).to.deep.equal(expected);
  });

});

