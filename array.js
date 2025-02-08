const checkDogs = function (dogsKate, dogsJulia) {
  const kate = dogsKate.slice();
  const removeCat = kate.filter(function (_, index) {
    return index >= 1 && index < kate.length - 2;
  });

  const juliaAndKateData = removeCat.concat(dogsJulia);
  juliaAndKateData.forEach(function (data, index) {
    if (data >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and its ${data} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
