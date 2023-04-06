window.addEventListener("load", solve);

function solve() {
  const inputFieldsObj = {
    firstName: document.getElementById("first-name"), //input field
    lastName: document.getElementById("last-name"), //input field
    age: document.getElementById("age"), //input field
    storyTitle: document.getElementById("story-title"), //input field
    genre: document.getElementById("genre"), //select
    story: document.getElementById("story"), //textarea
  };

  const temporalObj = {
    firstName: null,
    lastName: null,
    age: null,
    storyTitle: null,
    genre: null,
    story: null
  };

  const previewList = document.getElementById("preview-list");
  const publishBtn = document.getElementById("form-btn");
  const mainContainer = document.getElementById('main');

  publishBtn.addEventListener("click", getStoryData);

  function getStoryData() {
    const values = Object.values(inputFieldsObj);
    let everyInputHasValue = values.every((input) => input.value !== '');
    if(!everyInputHasValue) {
      return;
    }

    ({ firstName, lastName, age, storyTitle, genre, story } = inputFieldsObj);
    const liEl = createElement("li", "", previewList, "", ["story-info"]);
    const inputsArticle = createElement("article", "", liEl);
    createElement("h4","Name: " + firstName.value + " " + lastName.value,inputsArticle);
    createElement("p", `Age: ${age.value}`, inputsArticle);
    createElement("p", `Title: ${storyTitle.value}`, inputsArticle);
    createElement("p", `Genre: ${genre.value}`, inputsArticle);
    createElement("p", `${story.value}`, inputsArticle);

    const saveBtn = createElement("button", "Save Story", liEl, "", ["save-btn"]);
    const editBtn = createElement("button", "Edit Story", liEl, "", ["edit-btn"]);
    const deleteBtn = createElement("button", "Delete Story", liEl, "", ["delete-btn"]);

    for (const key in inputFieldsObj) {
      temporalObj[key] = inputFieldsObj[key].value;
    }

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    story.value = "";
    publishBtn.disabled = true;

    editBtn.addEventListener("click", editData);
    saveBtn.addEventListener('click', saveStoryHandler);
    deleteBtn.addEventListener('click', deleteStoryHandler);
  }

  function editData() {
    for (const key in temporalObj) {
      inputFieldsObj[key].value = temporalObj[key];
    }

    deleteStoryHandler();
  }

  function saveStoryHandler() {
     mainContainer.textContent = '';
     createElement('h1', 'Your scary story is saved!', mainContainer);
  }

  function deleteStoryHandler() {
    previewList.textContent = '';
    createElement('h3', 'Preview', previewList);
    publishBtn.disabled = false;
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
