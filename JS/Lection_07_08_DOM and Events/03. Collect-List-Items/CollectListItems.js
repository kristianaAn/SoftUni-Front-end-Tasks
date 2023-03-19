function extractText() {
    let elementsToAdd = Array.from(document.getElementsByTagName('li'));
    let textAreaToFill = document.getElementById('result');
    for (const el of elementsToAdd) {
        textAreaToFill.textContent += el.textContent + '\n';
    }
}