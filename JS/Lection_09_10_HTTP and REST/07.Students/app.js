function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students";
  const firstNameInput = document.querySelector("#form > div.inputs > input[name=firstName]");
  const lastNameInput = document.querySelector("#form > div.inputs > input[name=lastName]");
  const facultyNumInput = document.querySelector("#form > div.inputs > input[name=facultyNumber]");
  const gradeInput = document.querySelector("#form > div.inputs > input[name=grade]");
  const submitBtn = document.getElementById("submit");
  const tableBody = document.getElementsByTagName("tbody")[0];

  window.addEventListener('load', loadStudentData);

  submitBtn.addEventListener("click", postInfoHandler);

  function postInfoHandler() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facultyNumInput.value;
    const grade = gradeInput.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    };

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadStudentData();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function loadStudentData() {
    fetch(BASE_URL, {method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
      tableBody.textContent = '';
      for (const key in data) {
        const studentInfo = data[key];
        ({ firstName, lastName, facultyNumber, grade, _id } = studentInfo);
        const tr = document.createElement('tr');
        tableBody.appendChild(tr);
        const tdOne = document.createElement('td');
        tdOne.textContent = firstName;
        tr.appendChild(tdOne);
        const tdTwo = document.createElement('td');
        tdTwo.textContent = lastName;
        tr.appendChild(tdTwo);
        const tdThree = document.createElement('td');
        tdThree.textContent = facultyNumber;
        tr.appendChild(tdThree);
        const tdFour = document.createElement('td');
        tdFour.textContent = grade;
        tr.appendChild(tdFour);
      }
      firstNameInput.value = '';
      lastNameInput.value = '';
      facultyNumInput.value = '';
      gradeInput.value = '';
    })
    .catch((err) => {
      console.error(err);
    })
  }

}

attachEvents();
