function solve(input) {
   let evenSum = 0;
   let oddSum = 0;
   let currNum = 0;

   for (let i = 0; i < input.length; i++) {
      currNum = input[i];
      if(currNum % 2 === 0) {
        evenSum += currNum;
      } else {
        oddSum += currNum;
      }
   }

   console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);