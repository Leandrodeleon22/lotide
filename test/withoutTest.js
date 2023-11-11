const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");
const expect = require("chai").expect;

const words = ["hello", "world", "lighthouse"];

describe("#letterPositions", () => {
  it("returns ['hello','world'] for without(words, ['lighthouse'])['l'] ", () => {
    expect(without(words, ["lighthouse"])).to.have.same.members([
      "hello",
      "world",
    ]);
  });
});
