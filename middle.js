// const eqArrays = require("./eqArrays");
const assertArrayEqual = require("./assertArraysEqual");

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArrayEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} `);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} `);
//   }
// };

const middle = function (arr) {
  if (arr.length <= 2) return [];
  const firstMiddleIndex = Math.floor(arr.length / 2) - 1;
  const secondMiddleIndex = Math.floor(arr.length / 2);
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    console.log([arr[firstMiddleIndex], arr[secondMiddleIndex]]);
    return [arr[firstMiddleIndex], arr[secondMiddleIndex]];
  } else {
    console.log([arr[middleIndex]]);
    return [arr[middleIndex]];
  }
};

module.exports = middle;
