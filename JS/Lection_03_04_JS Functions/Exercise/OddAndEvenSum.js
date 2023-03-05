function calculate(number) {
  let evenSum = 0;
  let oddSum = 0;
  let numberArr = String(number)
    .split("")
    .map(Number)
    .forEach(num => num % 2 === 0 ? evenSum += num : oddSum += num);

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

calculate(1000435);
calculate(3495892137259234);
