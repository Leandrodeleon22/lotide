const takeUntil = function (data, callBack) {
  let output = [];

  for (const el of data) {
    if (callBack(el)) {
      break;
    }
    output.push(el);
  }

  return output;
};

module.exports = takeUntil;
