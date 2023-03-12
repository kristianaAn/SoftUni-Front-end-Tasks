function convertDataToObj(string) {
    let stringObj = JSON.parse(string);

    for (const key in stringObj) {
        console.log(key + ': ' + stringObj[key]);
    }
}

convertDataToObj('{"name": "George", "age": 40, "town": "Sofia"}');
convertDataToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');