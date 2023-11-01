const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const countLetters = function (sentence) {
  const report = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (!report[letter]) {
        report[letter] = 1;
      } else {
        report[letter] += 1;
      }
    }
  }
  return report;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("leandro deleon"));
console.log(countLetters("Christine"));
