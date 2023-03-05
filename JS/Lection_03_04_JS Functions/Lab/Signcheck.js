function signCheck(numOne, numTwo, numThree) {
  let numsArr = [numOne, numTwo, numThree];
  numsArr.filter((num) => num < 0).length % 2 !== 0
    ? console.log("Negative")
    : console.log("Positive");
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
