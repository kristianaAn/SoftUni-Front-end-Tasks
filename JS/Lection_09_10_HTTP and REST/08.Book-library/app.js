function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/books/";
  const loadBooksBtn = document.getElementById("loadBooks");
  const tableBody = document.getElementsByTagName("tbody")[0];
  const titleInput = document.querySelector("#form > input[name=title]");
  const authorInput = document.querySelector("#form > input[name=author]");
  const submitBtn = document.querySelector("#form > button");
  const formTitle = document.querySelector("#form > h3");
  let bookId;

  loadBooksBtn.addEventListener("click", booksLoaderHandler);

  function booksLoaderHandler() {
    fetch(BASE_URL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        tableBody.textContent = "";
        for (const key in data) {
          const bookInfo = data[key];
          ({ author, title } = bookInfo);
          let tr = createElement("tr", "", tableBody);
          createElement("td", title, tr);
          createElement("td", author, tr);
          let buttonsTd = createElement("td", "", tr);
          const editBtn = createElement("button", "Edit", buttonsTd, key);
          const deleteBtn = createElement("button", "Delete", buttonsTd, key);

          editBtn.addEventListener("click", (e) => {
            bookId = e.currentTarget.id;
            submitBtn.textContent = "Save";
            formTitle.textContent = "Edit FORM";
            titleInput.value = bookInfo.title;
            authorInput.value = bookInfo.author;
          });
          deleteBtn.addEventListener("click", deleteBookHandler);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function deleteBookHandler() {
    let bookToDeleteId = this.id;
    const httpHeaders = {
      method: "DELETE",
    };

    fetch(`${BASE_URL}/${bookToDeleteId}`, httpHeaders)
      .then(booksLoaderHandler)
      .catch((err) => {
        console.error(err);
      });
  }

  submitBtn.addEventListener("click", createBookHandler);

  function createBookHandler() {
    const title = titleInput.value;
    const author = authorInput.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ author, title }),
    };
    let url = BASE_URL;

    if (formTitle.textContent === "Edit FORM") {
      httpHeaders.method = "PUT";
      url += bookId;
    }

    fetch(url, httpHeaders)
      .then((data) => {
        booksLoaderHandler();
        if (formTitle.textContent === "Edit FORM") {
          submitBtn.textContent = "Submit";
          formTitle.textContent = "FORM";
        }

        titleInput.value = "";
        authorInput.value = "";
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
