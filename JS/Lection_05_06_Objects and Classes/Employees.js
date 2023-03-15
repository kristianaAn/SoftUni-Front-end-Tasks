function findEmployees(inputArr) {
  let employeesObj = {};
  for (const line of inputArr) {
    employeesObj[line] = line.length;
  }

  for (const employee in employeesObj) {
    console.log(
      "Name: " + employee + " -- Personal Number: " + employeesObj[employee]
    );
  }
}

findEmployees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

findEmployees([
    'Samuel Jackson', 
    'Will Smith', 
    'Bruce Willis', 
    'Tom Holland' 
    ]);
