const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
