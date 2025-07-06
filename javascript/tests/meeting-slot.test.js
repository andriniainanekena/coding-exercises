import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { meetingSlot } from "../src/30-shades-of-PROG1/meeting-slot.js";

describe('meetingSlot', function() {
  it('should find a free 60 minute meeting slot', function() {
    const input = [
      '1 08:45-12:59',
      '3 11:09-11:28',
      '5 09:26-09:56',
      '5 16:15-16:34',
      '3 08:40-10:12'
    ];
    expect(meetingSlot(5, input)).to.equal('1 13:00-13:59');
  });
});

