const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("return [2] middle([1, 2, 3])", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  }),
    it("return [3] middle([1, 2, 3, 4, 5])", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    }),
    it("return [3, 4] middle([1, 2, 3, 4, 5, 6]))", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    }),
    it("return [2, 3] middle([1, 2, 3, 4, 5, 6]))", () => {
      assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    });
});
