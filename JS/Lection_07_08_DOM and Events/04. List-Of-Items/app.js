function addItem() {
    const elToInsert = document.getElementById('newItemText');
    let listToAddTo = document.getElementById('items');
    let newLi = document.createElement('li');
    newLi.textContent = elToInsert.value;
    listToAddTo.appendChild(newLi);
    elToInsert.value = '';
}