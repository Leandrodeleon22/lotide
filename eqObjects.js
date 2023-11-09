const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  const objKeysOne = Object.keys(object1);
  const objKeysTwo = Object.keys(object2);

  if (objKeysOne.length !== objKeysTwo.length) return false;

  for (const key of objKeysOne) {
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else {
        if (!eqObjects(object1[key], object2[key])) return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;
