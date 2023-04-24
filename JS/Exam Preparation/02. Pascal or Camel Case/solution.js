function solve() {
  const inputText = document.getElementById("text"); //input
  let inputTextValue = inputText.value;
  const textChangeConvention = document.getElementById("naming-convention"); //input
  const textChangeConventionValue = textChangeConvention.value;
  const resultField = document.getElementById("result");

  let result = "";
  let outputArr = [];
  inputTextValue = inputTextValue.toLowerCase();

  switch (textChangeConventionValue) {
    case "Camel Case":
      let wordsArr = inputTextValue.split(" ");
      for (let i = 0; i < wordsArr.length; i++) {
        let currWord = wordsArr[i];
        if (i === 0) {
          outputArr.push(currWord);
        } else {
          let firstChar = currWord.charAt(0).toUpperCase();
          let remaining = currWord.substring(1, currWord.length);
          let word = firstChar + remaining;
          outputArr.push(word);
        }
      }
      result = outputArr.join("", outputArr);
      break;
    case "Pascal Case":
      let arr = inputTextValue.split(" ");

      for (const wordArr of arr) {
        let firstChar = wordArr.charAt(0).toUpperCase();
        let remaining = wordArr.substring(1, wordArr.length);
        let word = firstChar + remaining;
        outputArr.push(word);
      }
      result = outputArr.join("", outputArr);
      break;
    default:
      result = "Error!";
  }
  resultField.textContent = result;
}
