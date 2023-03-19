function calc() {
  const numOne = Number(document.getElementById("num1").value);
  const numTwo = Number(document.getElementById("num2").value);
  let sumOutput = document.getElementById('sum');

  sumOutput.value = numOne + numTwo;
}
