function findOccurrences(string) {
  let input = {};
  let inputArr = string.toLowerCase().split(' ');

  for (const word of inputArr) {
    if (!input.hasOwnProperty(word)) {
      input[word] = 1;
    } else {
      input[word] += 1;
    }
  }

  let outputArr = Object.entries(input);
  let onlyWordsArr = [];
  outputArr.find(word => word[1] % 2 !== 0).forEach(word => onlyWordsArr.push(word[0]));

  console.log(onlyWordsArr.join(' '));
}

findOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
// findOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
