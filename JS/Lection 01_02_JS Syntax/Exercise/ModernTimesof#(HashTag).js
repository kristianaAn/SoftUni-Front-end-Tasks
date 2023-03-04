function findSpecialWords(inputString) {
  let string = [];
  string = inputString.split(" ");
  let outputWords = [];

  for (let i = 0; i < string.length; i++) {
    let currentWord = string[i];
    if (currentWord.startsWith("#") && currentWord.length > 1) {
      if (!validateWord(currentWord)) {
        outputWords.push(currentWord.slice(1));
      }
    }
  }

  console.log(outputWords.join('\n'));

  function validateWord(wordToValidate) {
    wordToValidate = wordToValidate.toLowerCase();
    let isNotString = false;

    for (let k = 1; k < wordToValidate.length; k++) {
      let symbol = wordToValidate.charCodeAt(k);
      if (!(symbol >= 97 && symbol <= 122)) {
        isNotString = true;
      }
    }

    return isNotString;
  }
}

findSpecialWords(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
findSpecialWords(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
