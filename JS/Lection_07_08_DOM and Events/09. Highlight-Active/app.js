function focused() {
    const inputFields = Array.from(document.getElementsByTagName('input'));

    for (const field of inputFields) {
        field.addEventListener('focus', focusHandler);
        field.addEventListener('blur', blurHandler);
    }

    function focusHandler(event) {
       const currentInput = event.target;
       const parent = currentInput.parentElement;
       parent.classList.add('focused');
    }

    function blurHandler(event) {
        const currInput = event.target;
        const parent = currInput.parentElement;
        if(parent.classList.contains('focused')) {
            parent.classList.remove('focused');
        }
    }
}