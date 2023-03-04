function sortNumbers(numbers) {
  let sortedNumbers = [...numbers].sort((a, b) => a - b);

  let index = 0;
  let outputArr = [];
  while (sortedNumbers.length > 0) {
    if (index % 2 === 0) {
      outputArr.push(sortedNumbers.shift());
    } else {
      outputArr.push(sortedNumbers.pop());
    }

    index++;
  }

  return outputArr;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
