window.addEventListener("load", solve);

function solve() {
  let dishCounter = 0;

  const initialObj = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    gender: document.getElementById("genderSelect"),
    dishDescription: document.getElementById("task"),
  };

  const nullObj = {
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
    dishDescription: null,
  };

  const submitBtn = document.getElementById("form-btn");
  const progressCounter = document.getElementById("progress-count"); //span
  const ul = document.getElementById("in-progress");
  const finishedUl = document.getElementById('finished');
  

  submitBtn.addEventListener("click", addToInProgressSectionHandler);

  function addToInProgressSectionHandler(e) {
    e.preventDefault();
    let values = Object.values(initialObj);
    let allAreFilled = values.every((input) => input.value !== "");
    if (!allAreFilled) {
      return;
    }

    ({ firstName, lastName, age, gender, dishDescription } = initialObj);
    const li = createElement("li", "", ul, "", ["each-line"]);
    const article = createElement("article", "", li);
    createElement("h4", `${firstName.value} ${lastName.value}`, article);
    createElement("p", `${gender.value}, ${age.value}`, article);
    createElement("p", `Dish description: ${dishDescription.value}`, article);
    const editBtn = createElement("button", "Edit", li, "", ["edit-btn"]);
    const completeBtn = createElement("button", "Mark as complete", li, "", ["complete-btn"]);
    dishCounter++;
    progressCounter.textContent = dishCounter;
    editBtn.addEventListener("click", editFunctionHandler);
    completeBtn.addEventListener("click", markCompletedHandler);

    for (const key in initialObj) {
      nullObj[key] = initialObj[key].value;
    }

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    gender.value = "Male";
    dishDescription.value = "";
  }

  function markCompletedHandler(e) {
    let reference = e.currentTarget.parentNode;
    finishedUl.appendChild(reference);
    console.log(reference.children[0]);
    reference.children[2].remove();
    reference.children[1].remove();
    dishCounter--;
    progressCounter.textContent = dishCounter;
    
    const clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', deleteHandler);
  }

  function deleteHandler(e) {
    finishedUl.textContent = '';
  }

  function editFunctionHandler(e) {
    e.preventDefault();
    let target = e.currentTarget;
  
    for (const key in nullObj) {
      initialObj[key].value = nullObj[key];
    }

    dishCounter--;
    progressCounter.textContent = dishCounter;
    let parent = target.parentNode;
    parent.remove(); 
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== "input" && type !== "textarea") {
      htmlElement.textContent = content;
    }

    if (content && (type === "input" || type === "textarea")) {
      htmlElement.value = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}
