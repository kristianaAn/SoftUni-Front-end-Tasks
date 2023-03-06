function findPerfectNumber(number) {
   if(findDivisorsSum(number) === number) {
    console.log('We have a perfect number!');
   } else {
    console.log('It\'s not so perfect.');
   }

  function findDivisorsSum(number) {
    let sum = 0;
    for (let i = 1; i <= Math.floor(number / 2); i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    return sum;
  }

}

findPerfectNumber(6);
findPerfectNumber(28);
findPerfectNumber(1236498);
