const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} `);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const flatten = function (arr) {
  //   const flattened2 = arr.flat(Infinity);
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattened.push(arr[i][j]);
      }
    } else {
      flattened.push(arr[i]);
    }
  }
  console.log(flattened);
  return flattened;
  //   console.log(flattened2);
  //   return flattened2;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
