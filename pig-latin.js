const args = process.argv;

const arrayToSolve = args.slice(2);

const piglatin = function (arr) {
  if (arr.length === 0) {
    console.log("No arguments provided");
    return;
  }

  const output = arr.map((element) => {
    const removeFirstLetter = element.split("").slice(1).join("");

    return `${removeFirstLetter}${element[0]}ay`;
  });

  console.log(...output);
};

piglatin(arrayToSolve);
