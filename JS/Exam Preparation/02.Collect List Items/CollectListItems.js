function extractText() {
    const dataToJoin = Array.from(document.getElementsByTagName('li'));
    const textAreaResult = document.getElementById('result');
    for (const li of dataToJoin) {
        textAreaResult.value += li.textContent + '\n';
    }
}