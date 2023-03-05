function calculate(numOne, numTwo, numThree) {
  return sum(numOne, numTwo) - numThree;

  function sum(numOne, numTwo) {
    return numOne + numTwo;
  }
}

console.log(calculate(23, 6, 10));
console.log(calculate(1, 17, 30));
console.log(calculate(42, 58, 100));
