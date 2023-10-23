const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const tail = function (arr) {
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, words.length - 1);

const oneElement = [2];

console.log(tail(oneElement));
assertEqual(oneElement.length, 1);
assertEqual(tail(oneElement)[0], 2);
assertEqual(tail(oneElement).length, oneElement.length - 1);

assertEqual(tail());
