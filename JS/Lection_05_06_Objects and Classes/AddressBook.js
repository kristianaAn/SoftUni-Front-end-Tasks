function addressBook(inputArr) {
  let addressObj = {};

  for (const line of inputArr) {
    let [key, value] = line.split(":");
    addressObj[key] = value;
  }

  let addressObjEntries = Object.entries(addressObj);
  let sortedObjects = addressObjEntries.sort((personA, personB) => {
      let personAName = personA[0];
      let personBName = personB[0];
      return personAName.localeCompare(personBName);
  });

  for (const entry of sortedObjects) {
    console.log(entry[0] + ' -> ' + entry[1]);
  }
}

addressBook(['Tim:Doe Crossing', 
'Bill:Nelson Place', 
'Peter:Carlyle Ave', 
'Bill:Ornery Rd']);

addressBook(['Bob:Huxley Rd', 
'John:Milwaukee Crossing', 
'Peter:Fordem Ave', 
'Bob:Redwing Ave', 
'George:Mesta Crossing', 
'Ted:Gateway Way', 
'Bill:Gateway Way', 
'John:Grover Rd', 
'Peter:Huxley Rd', 
'Jeff:Gateway Way', 
'Jeff:Huxley Rd']);
