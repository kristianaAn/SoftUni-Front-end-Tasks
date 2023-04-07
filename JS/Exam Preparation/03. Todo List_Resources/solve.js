function attachEvents() {
  const BASE_LINK = "http://localhost:3030/jsonstore/tasks/";
  const loadAllBtn = document.getElementById("load-button");
  const toDoListContainer = document.getElementById("todo-list"); //ul
  const addBtn = document.getElementById("add-button");
  const inputTasksField = document.getElementById("title");

  loadAllBtn.addEventListener("click", loadAllTasksHandler);

  function loadAllTasksHandler(event) {
    event?.preventDefault();

    toDoListContainer.textContent = "";
    fetch(BASE_LINK)
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          ({ name, _id } = data[key]);
          const li = document.createElement("li");
          toDoListContainer.appendChild(li);
          li.setAttribute("id", _id);
          const span = document.createElement("span");
          span.textContent = name;
          li.appendChild(span);
          const removeBtn = document.createElement("button");
          removeBtn.textContent = "Remove";
          removeBtn.setAttribute("id", _id);
          li.appendChild(removeBtn);
          const editBtn = document.createElement("button");
          editBtn.textContent = "Edit";
          editBtn.setAttribute("id", _id);
          li.appendChild(editBtn);

          removeBtn.addEventListener("click", removeTaskHandler);

          editBtn.addEventListener("click", editTaskhandler);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addBtn.addEventListener("click", addTaskHandler);

  function addTaskHandler(e) {
    e.preventDefault();
    const name = inputTasksField.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ name }),
    };

    fetch(BASE_LINK, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadAllTasksHandler();
        inputTasksField.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function removeTaskHandler() {
    const taskIdToDelete = this.id;
    const httpHeaders = {
      method: "DELETE",
    };

    fetch(`${BASE_LINK}${taskIdToDelete}`, httpHeaders)
      .then(() => loadAllTasksHandler())
      .catch((err) => {
        console.error(err);
      });
  }

  function editTaskhandler(e) {
    e?.preventDefault();
    const liParent = e.currentTarget.parentNode;
    [span, _removeB, editB] = Array.from(liParent.children);
    const inputEditField = document.createElement("input");
    inputEditField.value = span.textContent;
    liParent.prepend(inputEditField);
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute('id', liParent.id);
    liParent.appendChild(submitBtn);
    span.remove();
    editB.remove();

    submitBtn.addEventListener("click", submitUpdateHandler);

    function submitUpdateHandler(event) {
      const patchId = event.currentTarget.parentNode.id;
      const name = liParent.children[0].value;
      const httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({name})
      }

      fetch(`${BASE_LINK}${patchId}`, httpHeaders)
      .then((res) => res.json())
      .then(() => loadAllTasksHandler())
      .catch((err) => {
        console.error(err);
      })
    }
  }
}

attachEvents();
