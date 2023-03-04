function solve(inputText, word) {
    let counter = 0;
    let text = inputText.split(' ');

    for (let i = 0; i < text.length; i++) {
        if(text[i] === word) {
            counter++;
        }
    }

    console.log(counter);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');
