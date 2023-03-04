function solve(startNum, endNum) {
  let numsArr = [];
  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    numsArr.push(i);
    sum += i;
  }

  console.log(numsArr.join(" ", numsArr));
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);
