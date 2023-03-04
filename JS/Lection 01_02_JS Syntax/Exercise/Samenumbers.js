function solve(number) {
  let numAsString = number.toString().split("");
  let isDifferent = false;
  let lastNum = number % 10;
  let sum = 0;
  let currentNum;

  for (let i = 0; i < numAsString.length; i++) {
    currentNum = Number(numAsString[i]);
    sum += currentNum;
    if (currentNum !== lastNum) {
      isDifferent = true;
    }
  }

  if (isDifferent === false) {
    console.log("true");
  } else {
    console.log("false");
  }

  console.log(sum);
}

solve(2222222);
solve(1234);
