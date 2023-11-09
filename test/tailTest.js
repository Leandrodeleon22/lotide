const tail = require("../tail");
const assert = require("chai").assert;

const oneElement = [2];
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("return 1 for [2]", () => {
    assert.strictEqual(tail(oneElement).length, oneElement.length - 1);
  }),
    it('returns "Lighthouse" for ["Yo Yo", "Lighthouse", "Labs"] ', () => {
      assert.strictEqual(tail(words)[0], "Lighthouse");
    }),
    it('returns "words.length - 1" for words.length - 1 ', () => {
      assert.strictEqual(tail(words).length, words.length - 1);
    });
});
