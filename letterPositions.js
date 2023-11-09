const letterPositions = function (sentence) {
  const results = {};

  [...sentence].forEach((letter, index) => {
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [index];
      } else {
        results[letter] = results[letter].push(index);
      }
    }
  });

  return results;
};

module.exports = letterPositions;
