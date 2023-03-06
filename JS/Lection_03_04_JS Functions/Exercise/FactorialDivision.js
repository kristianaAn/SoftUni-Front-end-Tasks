function factorialDivision(numOne, numTwo) {
  return (getFactorial(numOne) / getFactorial(numTwo)).toFixed(2);

  function getFactorial(num) {
    if (num === 1) {
      return num;
    }
    return num * getFactorial(num - 1);
  }
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));