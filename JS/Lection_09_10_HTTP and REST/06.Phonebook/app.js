function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';
    const personInputField = document.getElementById('person');
    const phoneInputField = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');
    const loadBtn = document.getElementById('btnLoad');
    const phonebookContainer = document.getElementById('phonebook');

    loadBtn.addEventListener('click', loadContactsHandler);

    function loadContactsHandler() {
        fetch(BASE_URL, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            for (const key in data) {
                let contactData = data[key];
                ({ phone, person, _id } = contactData);
                const li = document.createElement('li');
                li.textContent = `${person}: ${phone}`;
                deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.setAttribute('id', _id);
                deleteBtn.addEventListener('click', deleteContactHandler);
                li.appendChild(deleteBtn);
                phonebookContainer.appendChild(li);
            }
        })
        .catch((err) => {
            console.error(err);
        });
    }

    createBtn.addEventListener('click', createContactHandler);

    function createContactHandler() {
        const person = personInputField.value;
        const phone = phoneInputField.value;
        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person, phone})
        };

        fetch(BASE_URL, httpHeaders)
        .then((res) => res.json())
        .then(() => {
            phonebookContainer.textContent = '';
            loadContactsHandler();
            personInputField.value = '';
            phoneInputField.value = '';
        })
        .catch((err) => {
            console.error(err);
        });
    }

    function deleteContactHandler() {
        const id = this.id;
        const httpHeader = {
            method: 'DELETE'
        };

        fetch(`${BASE_URL}/${id}`, httpHeader)
        .then((res) => res.json())
        .then(() => {
            phonebookContainer.textContent = '';
            loadContactsHandler();
        })
        .catch((err) => {
            console.error(err);
        });
    }
}

attachEvents();