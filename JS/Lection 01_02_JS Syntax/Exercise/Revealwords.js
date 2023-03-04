function revealWords(wordStringInput, templateStringInput) {
  let wordString = [];
  wordString = wordStringInput.split(", ");
  let templateString = [];
  templateString = templateStringInput.split(" ");
  let wordToReveal;
  let currentWord;
  let output = [];

  for (let i = 0; i < templateString.length; i++) {
    wordToReveal = templateString[i];
    if (wordToReveal.startsWith("*")) {
      for (let j = 0; j < wordString.length; j++) {
        currentWord = wordString[j];
        if (wordToReveal.length === currentWord.length) {
          output.push(wordToReveal.replace(wordToReveal, currentWord));
        }
      }
    } else {
      output.push(wordToReveal);
    }
  }

  console.log(output.join(' '));
}

revealWords("great", "softuni is ***** place for learning new programming languages");
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');
