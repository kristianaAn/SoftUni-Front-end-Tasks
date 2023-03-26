function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputTextValue = inputText.value;
    const inputValue = document.getElementById('newItemValue');
    const inputValueValue = inputValue.value;
    const newOption = document.createElement('option');
    newOption.textContent = inputTextValue;
    newOption.value = inputValueValue;
    const dropDownMenu = document.getElementById('menu');
    const addButton = document.querySelector('input[type=button]');
    addButton.addEventListener('click', addOption(newOption));
    inputText.value = '';
    inputValue.value = '';
    
    function addOption(newOption) {
        dropDownMenu.appendChild(newOption);
    }
}