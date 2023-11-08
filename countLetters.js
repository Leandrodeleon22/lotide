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

module.exports = countLetters;
