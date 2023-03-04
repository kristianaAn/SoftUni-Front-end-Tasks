function solve(number) {
  let lastDigit = 0;
  let sum = 0;

  while (number > 0) {
    lastDigit = number % 10;
    sum += lastDigit;
    number = Math.floor(number / 10);
  }

  console.log(sum);
}

solve(245678);
solve(97561);
solve(543);
