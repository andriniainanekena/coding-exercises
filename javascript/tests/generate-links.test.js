
import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { generateLinks } from "../src/30-shades-of-PROG1/generate-links.js";

describe('generateLinks', function() {
  it('should generate HTML links from array', function() {
    expect(generateLinks([{ url: "http://www.google.com", text: "10^100" }])).to.equal('<a href="http://www.google.com">10^100</a>');
    expect(generateLinks([{ url: "#q", text: "query" }, { url: "#a", text: "ans" }])).to.equal('<a href="#q">query</a><a href="#a">ans</a>');
  });
});

