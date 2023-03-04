function solve(inputText, word) {

    while(inputText.includes(word)) {
       inputText = inputText.replace(word, '*'.repeat(word.length));
    }

    console.log(inputText);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');