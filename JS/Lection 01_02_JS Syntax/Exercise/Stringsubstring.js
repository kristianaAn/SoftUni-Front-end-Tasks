function stringFinder(string, stringText) {
   let stringTextArr = stringText.split(' ');
   let isAMatch = false;

   for (const word of stringTextArr) {
      if(word.toLowerCase() === string) {
         isAMatch = true;
         break
      }
   }

   if(!isAMatch) {
    console.log(`${string} not found!`)
   } else {
    console.log(string);
   }

}

stringFinder('javascript', 'JavaScript is the best programming language');
stringFinder('python', 'JavaScript is the best programming language');