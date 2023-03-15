function wordTracker(inputArr) {
  inputArr = [...inputArr];
  let wordOccurrences = {};
  
  let searchedWords = inputArr[0].split(' ');

  for (const word of searchedWords) {
     wordOccurrences[word] = 0;
  }
  
  for (let i = 1; i < inputArr.length; i++) {
      let currentWord = inputArr[i];

      if(wordOccurrences.hasOwnProperty(currentWord)) {
        wordOccurrences[currentWord] += 1;
      }
  }

  wordOccurrencesArr = Object.entries(wordOccurrences);

  wordOccurrencesArr.sort((wordA, wordB) => {
    let wordACount = wordA[1];
    let wordBCount = wordB[1];
    return wordBCount - wordACount;
  });

  for (const word of wordOccurrencesArr) {
      console.log(word[0] + ' - ' + word[1]);
  }
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

wordTracker([
    'is the',  
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);
