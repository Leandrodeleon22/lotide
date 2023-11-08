const findKeyByValue = function (obj, stringToGetValue) {
  const resultKey = Object.keys(obj).filter((key) => {
    return stringToGetValue === obj[key];
  });

  return resultKey.join("");
};

// findKeyByValue(bestTVShowsByGenre, "The Wire");

module.exports = findKeyByValue;
