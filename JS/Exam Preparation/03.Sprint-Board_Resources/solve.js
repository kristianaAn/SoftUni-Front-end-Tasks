function attachEvents() {
  const loadBtn = document.getElementById("load-board-btn");
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  const taskTypeToDo = document.querySelector("#todo-section");
  const taskTypeInProgress = document.querySelector("#in-progress-section");
  const taskTypeCodeReview = document.querySelector("#code-review-section");
  const taskTypeDone = document.querySelector("#done-section");
  [toDoUl, inProgressUl, codeReviewUl, doneUl] = document.getElementsByClassName("task-list");
  const addTaskBtn = document.getElementById("create-task-btn");
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  loadBtn.addEventListener("click", getAllTasksHandler);

  addTaskBtn.addEventListener("click", addTaskHandler);

  function getAllTasksHandler(e) {
    e?.preventDefault();
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        toDoUl.innerHTML = "";
        inProgressUl.innerHTML = "";
        codeReviewUl.innerHTML = "";
        doneUl.innerHTML = "";

        for (let key in data) {
          ({ title, description, status, _id } = data[key]);
          if(status === 'ToDo') {
            toDoUl.classList = 'task-list';
            taskTypeToDo.appendChild(toDoUl);
            const li = createElement('li', '', toDoUl, _id, ['task']);
            createElement('h3', `${title}`, li);
            createElement('p', `${description}`, li);
            let moveToInPBtn = createElement('button', 'Move to In Progress', li);
            
            moveToInPBtn.addEventListener('click', moveToInProgressHandler);

          } else if(status === 'In Progress') {
            inProgressUl.classList = 'task-list';
            taskTypeInProgress.appendChild(inProgressUl);
            const li = createElement('li', '', inProgressUl, _id, ['task']);
            createElement('h3', `${title}`, li);
            createElement('p', `${description}`, li);
            let moveToCodeReviewBtn = createElement('button', 'Move to Code Review', li);

            moveToCodeReviewBtn.addEventListener('click', moveToCodeReview);

          } else if(status === 'Code Review') {
            codeReviewUl.classList = 'task-list';
            taskTypeCodeReview.appendChild(codeReviewUl);
            const li = createElement('li', '', codeReviewUl, _id, ['task']);
            createElement('h3', `${title}`, li);
            createElement('p', `${description}`, li);
            let moveToDoneBtn = createElement('button', 'Move to Done', li);

            moveToDoneBtn.addEventListener('click', moveToDoneHandler);

          } else if(status === 'Done') {
            doneUl.classList = 'task-list';
            taskTypeDone.appendChild(doneUl);
            const li = createElement('li', '', doneUl, _id, ['task']);
            createElement('h3', `${title}`, li);
            createElement('p', `${description}`, li);
            let closeBtn = createElement('button', 'Close', li);

            closeBtn.addEventListener('click', closeTaskHandler);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function moveToInProgressHandler(e) {
    const targetId = e.currentTarget.parentNode.id;
    const status = 'In Progress';
    const httpHeaders = {
      method: 'PATCH',
      body: JSON.stringify({ status })
    }

    fetch(BASE_URL + targetId, httpHeaders)
    .then(() => getAllTasksHandler())
    .catch((err) => {
      console.error(err);
    })
  }

  function moveToCodeReview(e) {
    const target = e.currentTarget.parentNode.id;
    const status = 'Code Review';
    const httpHeaders = {
      method: 'PATCH',
      body: JSON.stringify({ status })
    }

    fetch(BASE_URL + target, httpHeaders)
    .then(() => getAllTasksHandler())
    .catch((err) => {
      console.error(err);
    })
  }

  function moveToDoneHandler(e) {
    const targetId = e.currentTarget.parentNode.id;
    const status = 'Done';
    const httpHeaders = {
      method: 'PATCH',
      body: JSON.stringify({ status })
    }

    fetch(BASE_URL + targetId, httpHeaders)
    .then(() => getAllTasksHandler())
    .catch((err) => {
      console.error(err);
    })
  }

  function closeTaskHandler(e) {
    const targetId = e.currentTarget.parentNode.id;
    const httpHeaders = {
      method: 'DELETE'
    }
    fetch(BASE_URL + targetId, httpHeaders)
    .then(() => getAllTasksHandler())
    .catch((err) => {
      console.error(err);
    })
  }

  function addTaskHandler(e) {
    e.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;
    const status = "ToDo";
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ title, description, status }),
    };

    fetch(BASE_URL, httpHeaders)
      .then(() => {
        getAllTasksHandler();
        titleInput.value = '';
        descriptionInput.value = '';
      })
      .catch((err) => {
        console.error(err);
      });
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

attachEvents();
