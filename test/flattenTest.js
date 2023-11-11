const flatten = require("../flatten");
const expect = require("chai").expect;

describe("#flatten", () => {
  it("returns '[1,2,3,4,5,6]'for flatten([1,2,[3,4],5,[6]]) ", () => {
    expect(flatten([1, 2, [3, 4], 5, [6]])).to.have.same.members([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});
