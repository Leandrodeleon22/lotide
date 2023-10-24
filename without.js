const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr2} !== ${arr2} `);
  }
};

const without = function (arr1, arr2) {
  if (arr2.length > arr2.length) {
    console.log("too many value");
    return;
  }
  const notMatch = [];
  for (let i = 0; i < arr1.length; i++) {
    // console.log(`arrayOne ${arr1[i]}`);
    for (let j = 0; j < arr2.length; j++) {
      //   console.log(arr2[j], arr1[i]);
      if (arr2[j] === arr1[i]) {
        notMatch.push(arr1[i]);
      }
      //   console.log(`arrayTwo ${arr1[i]}`);
    }
  }
  const final = [];
  for (let k = 0; k < arr1.length; k++) {
    for (let f = 0; f < notMatch.length; f++) {
      if (arr1[k] !== notMatch[f]) {
        final.push(arr1[k]);
      }
    }
  }

  console.log(final);
};

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
