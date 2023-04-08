function solve(inputArr) {
  let shoppingList = "";
  shoppingList = inputArr.shift();
  let shoppingListArr = shoppingList.split("!");
  

  for (let i = 0; i < inputArr.length - 1; i++) {
    let shoppingListObj = {};
    for (const line of shoppingListArr) {
        shoppingListObj[line] = 0;
      }

    let element = inputArr[i];
    [ command, firstPr, secondPr ] = element.split(' ');

    if(command === 'Urgent') {
       if(!shoppingListObj.hasOwnProperty(firstPr)) {
           shoppingListArr.unshift(firstPr); 
       }

    } else if(command === 'Unnecessary') {
       if(shoppingListObj.hasOwnProperty(firstPr)) {
          let indexToRemove = shoppingListArr.indexOf(firstPr);
          shoppingListArr.splice(indexToRemove, 1);
       }

    } else if(command === 'Correct') {
        if(shoppingListObj.hasOwnProperty(firstPr)) {
            let indexFirstPr = shoppingListArr.indexOf(firstPr);
            shoppingListArr[indexFirstPr] = secondPr;
        }

    } else if(command === 'Rearrange') {
       if(shoppingListObj.hasOwnProperty(firstPr)) {
         let indexToSplice = shoppingListArr.indexOf(firstPr);
         let splicedEl = shoppingListArr.splice(indexToSplice, 1);
         shoppingListArr.push(splicedEl);
       }
    }
  }

  console.log(shoppingListArr.join(', ', shoppingListArr));
}

solve([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

solve((["Milk!Pepper!Salt!Water!Banana", 
"Urgent Salt", 
"Unnecessary Grapes", 
"Correct Pepper Onion", 
"Rearrange Water", 
"Correct Tomatoes Potatoes", 
"Go Shopping!"]));
