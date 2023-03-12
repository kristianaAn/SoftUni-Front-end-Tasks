function getContacts(inputArr) {
    let phoneBook = {};

    for (const elementOnLine of inputArr) {
        let [name, phone] = elementOnLine.split(' ');
        phoneBook[name] = phone;
    }

    for (const person in phoneBook) {
        console.log(person + ' -> ' + phoneBook[person]);
    }
}

getContacts(['Tim 0834212554', 
'Peter 0877547887', 
'Bill 0896543112', 
'Tim 0876566344']);

getContacts(['George 0552554', 
'Peter 087587', 
'George 0453112', 
'Bill 0845344']);