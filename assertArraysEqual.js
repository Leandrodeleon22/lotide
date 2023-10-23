const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: array1 === array2 `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: array2 !== array2 `);
  }
};

assertArrayEqual([1, 2, 3], [1, 2, "3"]);
