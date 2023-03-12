function createPerson(firstName, lastName, age) {
  let person = { firstName: firstName, lastName: lastName, age: age };
  return person;
}

let createdPerson = createPerson("Peter", "Pan", "20");
console.log('firstName: ' + createdPerson.firstName);
console.log('lastName: ' + createdPerson.lastName);
console.log('age: ' + createdPerson.age);

let createdPersonTwo = createPerson("George", "Smith", "18");
console.log('firstName: ' + createdPersonTwo.firstName);
console.log('lastName: ' + createdPersonTwo.lastName);
console.log('age: ' + createdPersonTwo.age);