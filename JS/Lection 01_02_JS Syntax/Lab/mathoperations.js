function solve(num1, num2, string) {
  let result = 0;
  switch (string) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    case "**":
      result = Math.pow(num1, num2);
    //   num1 ** num2;
      break;
  }
  console.log(result);
}

solve(5, 6, "+");
solve(3, 5.5, "*");
solve(2, 2, "**");
