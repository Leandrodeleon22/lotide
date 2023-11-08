const middle = function (arr) {
  if (arr.length <= 2) return [];
  const firstMiddleIndex = Math.floor(arr.length / 2) - 1;
  const secondMiddleIndex = Math.floor(arr.length / 2);
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[firstMiddleIndex], arr[secondMiddleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};

module.exports = middle;
