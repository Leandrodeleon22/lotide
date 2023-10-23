const args = process.argv;

const arrayToSolve = args.slice(2);

const reverseString = function (arr) {
  const stringWord = arr.map((element) => element.split("").reverse().join(""));

  console.log(...stringWord);
};

reverseString(arrayToSolve);
