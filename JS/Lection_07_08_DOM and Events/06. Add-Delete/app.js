function addItem() {
    let list = document.getElementById('items');
    let elToAdd = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    let newAnchor = document.createElement('a');
    newLi.textContent = elToAdd.value;
    newAnchor.textContent = '[Delete]';
    newAnchor.setAttribute('href', '#');
    newLi.appendChild(newAnchor);
    list.appendChild(newLi);
    newAnchor.addEventListener('click', deleteHandler);
    elToAdd.value = '';

    function deleteHandler(e) {
        const itemToDelete = e.currentTarget.parentElement;
        itemToDelete.remove();
    }
}