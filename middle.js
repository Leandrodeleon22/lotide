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

const middle = function (arr) {
  if (arr.length <= 2) return [];

  if (arr.length % 2 === 0) {
    const firstMiddleIndex = Math.floor(arr.length / 2) - 1;
    const secondMiddleIndex = Math.floor(arr.length / 2);

    console.log([arr[firstMiddleIndex], arr[secondMiddleIndex]]);
    return [arr[firstMiddleIndex], arr[secondMiddleIndex]];
  } else {
    const middleIndex = Math.floor(arr.length / 2);
    console.log([arr[middleIndex]]);
    return [arr[middleIndex]];
    // return arr[middleIndex]
  }
};

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
