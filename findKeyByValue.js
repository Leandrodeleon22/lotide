const findKeyByValue = function (obj, stringToGetValue) {
  const resultKey = Object.keys(obj).filter((key) => {
    return stringToGetValue === obj[key];
  });
  if (resultKey.length === 0) return undefined;
  return resultKey.join("");
};

module.exports = findKeyByValue;
