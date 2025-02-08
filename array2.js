const calcAverageHumanAge = function (ages) {
  //* humanAge calculate
  const humanAge = ages.map(function (mov) {
    if (mov <= 2) {
      return 2 * mov;
    } else {
      return 16 + mov * 4;
    }
  });

  //* Adult ages calculate
  const adult = humanAge.filter(function (mov) {
    return mov >= 18;
  });

  //* calculate adult ages
  const calculateAge =
    adult.reduce(function (acc, mov) {
      return acc + mov;
    }, 0) / adult.length;

  return calculateAge;
};

const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(data1, data2);
