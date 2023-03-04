function solve(string, repeatCount) {
   repeatString(string, repeatCount);

    function repeatString(word, n) {
        console.log(word.repeat(n));
    }
}

solve("abc", 3);
solve("String", 2);