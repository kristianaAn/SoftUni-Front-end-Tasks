function convertToJSON(name, lastName, hairColor) {
    let objectOne = {name: name, lastName, hairColor};
    let jsonConverted = JSON.stringify(objectOne);
    console.log(jsonConverted);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');