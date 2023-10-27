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

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  [...sentence].forEach((letter, index) => {
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [index];
      } else {
        results[letter] = results[letter].concat(index);
      }
    }
  });
  console.log(results);
  return results;
};

assertArrayEqual(letterPositions("hello").l, [2, 3]);
