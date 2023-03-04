function solve(arr, step) {
  let currEl;
  let outputArr = [];

  for (let i = 0; i < arr.length; i += step) {
    currEl = arr[i];
    outputArr.push(currEl.toString());
  }

  return(outputArr);
}

console.log(
  solve(['5', '20', '31', '4', '20'], 2)
);

// solve(['dsa', 'asd', 'test', 'tset'], 2);
