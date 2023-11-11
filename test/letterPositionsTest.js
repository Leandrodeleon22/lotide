const letterPositions = require("../letterPositions");
const expect = require("chai").expect;

describe("#letterPositions", () => {
  it("returns [2,3] for letterPositions(hello)['l'] ", () => {
    expect(letterPositions("hello")["l"]).to.have.same.members([2, 3]);
  });
});
