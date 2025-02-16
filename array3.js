const calcAverageHumanAge = (ages) => {
  const calculateAge = ages
    .map((mov) => {
      if (mov <= 2) {
        return 2 * mov;
      } else {
        return 16 + mov * 4;
      }
    })
    .filter((mov) => mov >= 18)
    .reduce((acc, mov, _, arr) => {
      return acc + mov / arr.length;
    }, 0);

  return calculateAge;
};

const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(data1, data2);
