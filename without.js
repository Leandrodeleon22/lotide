const without = function (arr1, arr2) {
  const match = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        match.push(arr1[i]);
      }
    }
  }
  const final = [];
  for (let k = 0; k < arr1.length; k++) {
    for (let f = 0; f < match.length; f++) {
      if (arr1[k] !== match[f]) {
        final.push(arr1[k]);
      }
    }
  }

  return final;
};

module.exports = without;
