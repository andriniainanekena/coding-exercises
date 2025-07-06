import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { toPascalCase } from "../src/30-shades-of-PROG1/to-pascal-case.js";

describe('toPascalCase', function() {
  it('should convert sentence to PascalCase', function() {
    expect(toPascalCase("hello world")).to.equal("HelloWorld");
    expect(toPascalCase("make it pascal case")).to.equal("MakeItPascalCase");
  });
});

