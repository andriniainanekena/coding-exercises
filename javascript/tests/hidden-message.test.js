import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { hiddenMessage } from "../src/30-shades-of-PROG1/hidden-message.js";

describe('hiddenMessage', function() {
  it('should extract hidden message', function() {
    expect(hiddenMessage(["Yet", "we", "rise"])).to.equal("Yes");
    expect(hiddenMessage(["He", "cannot", "patch", "passwords"])).to.equal("Hats");
  });
});

