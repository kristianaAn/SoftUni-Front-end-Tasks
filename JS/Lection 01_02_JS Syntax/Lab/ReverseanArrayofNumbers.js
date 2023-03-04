function solve(number, arr) {
  let outputArr = [];
  for (let i = 0; i < number; i++) {
    outputArr.push(arr[i]);
  }

  let output = outputArr;
  output.reverse();

  console.log(output.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
