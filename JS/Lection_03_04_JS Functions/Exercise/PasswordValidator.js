function passwordValidation(string) {

    function lengthIsValid(str) {
       return str.length >= 6 && str.length <= 10;
    }

    function symbolsAreValid(str) {
       let regex = /^[A-Za-z0-9]+$/g;
       return regex.test(str);
    }

    function digitsMinCovered(str) {
       let pattern = /[0-9]/g;
       return [...str.matchAll(pattern)].length >= 2;
    } 

    if(!lengthIsValid(string)) {
        console.log("Password must be between 6 and 10 characters");
    } 
    
    if (!symbolsAreValid(string)) {
        console.log("Password must consist only of letters and digits");
    } 
    
    if(!digitsMinCovered(string)) {
        console.log("Password must have at least 2 digits");
    }

    if(lengthIsValid(string) && symbolsAreValid(string) && digitsMinCovered(string)) {
        console.log('Password is valid');
    }
}

passwordValidation('logIn');
passwordValidation('MyPass123');
passwordValidation('Pa$s$s');