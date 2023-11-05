const assertEqual = require("./assertEqual");

// assertEqual("Lighthouse Labs", "Bootcamp");

// assertEqual(1, 1);
// assertEqual(4, 3);
// assertEqual("same", "same");

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {

    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
      if(!eqArrays(arr1[i], arr2[i])){
        return false
      } 
    } 

     else if ( arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) //true

module.exports = eqArrays;
