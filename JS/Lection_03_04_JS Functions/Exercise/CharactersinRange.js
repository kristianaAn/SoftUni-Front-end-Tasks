function findCharsInRange(stringOne, stringTwo) {
  if (stringOne.charCodeAt(0) > stringTwo.charCodeAt(0)) {
    console.log(cyclePrint(stringTwo, stringOne));
  } else {
    console.log(cyclePrint(stringOne, stringTwo));
  }

  function cyclePrint(symbolOne, symbolTwo) {
    let chars = [];
    for (let i = symbolOne.charCodeAt(0) + 1; i < symbolTwo.charCodeAt(0); i++) {
      chars.push(String.fromCharCode(i));
    }
    return chars.join(" ");
  }
}

findCharsInRange("a", "d");
findCharsInRange("#", ":");
findCharsInRange("C", "#");
