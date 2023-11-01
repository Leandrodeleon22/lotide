const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} `);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (arr, callback) {
  // empty for now :)

  const result = [];

  for (let item of arr) {
    result.push(callback(item));
  }

  return result;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArrayEqual(results1, ["g", "c", "t", "m", "t"]);
