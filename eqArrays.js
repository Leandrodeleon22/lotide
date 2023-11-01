const assertEqual = require("./assertEqual");

// assertEqual("Lighthouse Labs", "Bootcamp");

// assertEqual(1, 1);
// assertEqual(4, 3);
// assertEqual("same", "same");

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
