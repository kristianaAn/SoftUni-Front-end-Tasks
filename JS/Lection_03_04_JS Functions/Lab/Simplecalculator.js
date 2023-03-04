function solve(numOne, numTwo, operator) {
  console.log(performOperation(operator, numOne, numTwo));

  function performOperation(operator, numberOne, numberTwo) {
    switch (operator) {
      case "multiply":
        return numberOne * numberTwo;
      case "divide":
        return numberOne / numberTwo;
      case "add":
        return numberOne + numberTwo;
      case "subtract":
        return numberOne - numberTwo;
    }
  }
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(12, 19, 'add');
solve(50, 13, 'subtract');
