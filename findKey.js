const findKey = function (obj, callBackFunc) {
  for (const key of Object.keys(obj)) {
    if (callBackFunc(obj[key])) return key;
  }
  return "no key found";
};

module.exports = findKey;
