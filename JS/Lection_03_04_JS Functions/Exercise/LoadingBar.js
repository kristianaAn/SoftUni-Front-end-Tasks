function printLoadingBar(number) {
  let percent = "%";

  if (number < 100) {
    printPercentageLoaded(number);
  } else if (number === 100) {
    console.log(`${number}% Complete!`);
    console.log('[' + percent.repeat(number / 10) + ']');
  }

  function printPercentageLoaded(number) {
    let dot = ".";
    let symbolsCounter = number / 10;
    console.log(number + percent + ' [' + percent.repeat(symbolsCounter) + dot.repeat(10 - symbolsCounter) + ']');
    console.log("Still loading...");
  }
}

printLoadingBar(30);
printLoadingBar(50);
printLoadingBar(100);
