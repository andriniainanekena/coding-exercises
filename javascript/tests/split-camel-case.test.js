import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { splitCamelCase } from "../src/30-shades-of-PROG1/split-camel-case.js";

describe('splitCamelCase', function() {
  it('should add space before uppercase letters', function() {
    expect(splitCamelCase("myAwesomeCode")).to.equal("my Awesome Code");
    expect(splitCamelCase("camelCaseTest")).to.equal("camel Case Test");
  });
});

