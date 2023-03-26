function subtract() {
    const firstNum = document.getElementById('firstNumber');
    const secondNum = document.getElementById('secondNumber');
    const result = document.getElementById('result');
    const firstNumValue = Number(firstNum.value);
    const secondNumValue = Number(secondNum.value);
    let subtractionResult = firstNumValue - secondNumValue;
    result.textContent = subtractionResult;
}