function sumTable() {
   const numbersToSum = Array.from(document.querySelectorAll('td:nth-child(even)'));
   let sumToFill = document.getElementById('sum');
   const btn = document.getElementsByTagName('button')[0];
   let sum = 0;
   for (let i = 0; i < numbersToSum.length - 1; i++) {
      let currNum = Number(numbersToSum[i].textContent);
      sum += currNum;
   }

   sumToFill.innerHTML = sum;
}