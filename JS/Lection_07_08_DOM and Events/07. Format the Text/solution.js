function solve() {
  const inputText = document.getElementById("input");
  document.getElementById("formatItBtn").addEventListener("click", formatText(inputText));

  function formatText(inputText) {
    const inputTextArr = Array.from(inputText.value.split("."));
    inputTextArr.pop();
    const outputArr = [];
    for (const sentence of inputTextArr) {
      outputArr.push(sentence.trim());
    }

    const parentDivToAppendTo = document.getElementById("output");

    while (outputArr.length > 0) {
      let paragraph = outputArr.splice(0, 3);
      let currParagraph = document.createElement('p');
      currParagraph.textContent = paragraph.join('.') + '.';
      parentDivToAppendTo.appendChild(currParagraph);
    }
  }
}
