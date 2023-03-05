function checkForPalindromes(...numbers) {
  numbers = String(numbers)
    .split(",")
    .map(Number)
    .forEach((num) => (reverseNumber(num) === num ? console.log("true") : console.log("false")));

  function reverseNumber(integer) {
    integer = String(integer).split('').reverse();
    // for (let i = 0; i < (integer.length - 1) / 2; i++) {
    //   let temp = integer[i];
    //   integer[i] = integer[integer.length - 1 - i];
    //   integer[integer.length - 1 - i] = temp;
    // }
    return Number(integer.join(''));
  }
}

checkForPalindromes([123,323,421,121]);
checkForPalindromes([32,2,232,1010]);
