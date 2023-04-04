function attachEvents() {
  const POSTS_BASE_LINK = "http://localhost:3030/jsonstore/blog/posts";
  const COMMENTS_BASE_LINK = "http://localhost:3030/jsonstore/blog/comments";
  const loadPostsBtn = document.getElementById("btnLoadPosts");
  const viewPostsBtn = document.getElementById("btnViewPost");
  const postsSelectSection = document.getElementById("posts");
  const h1PostTitle = document.getElementById("post-title");
  const parPostBody = document.getElementById("post-body");
  const commentsContainer = document.getElementById("post-comments");
  let postObjects = {};

  loadPostsBtn.addEventListener("click", generatePosts);

  function generatePosts() {
    fetch(`${POSTS_BASE_LINK}`)
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          let currEl = data[key];
          createElement("option", currEl.title, postsSelectSection, "", "", {
            value: key,
          });
          postObjects[key] = data[key];
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  viewPostsBtn.addEventListener("click", generateComments);

  function generateComments() {
    fetch(`${COMMENTS_BASE_LINK}`)
      .then((res) => res.json())
      .then((data) => {
        let currentOption = document.getElementById("posts").selectedOptions[0].value;
        let postObjValue = iteratePostObjects(postObjects, currentOption);
        h1PostTitle.textContent = postObjValue.title;
        parPostBody.textContent = postObjValue.body;
        
        for (const key in data) {
            let currCommentLine = data[key];
            if(currCommentLine.postId === postObjValue.id) {
               createElement('li', currCommentLine.text, commentsContainer, currCommentLine.id);
            }
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  function iteratePostObjects(postObj, commentsKey) {
    let objToReturn = {};
    for (const key in postObj) {
      if (key === commentsKey) {
        objToReturn = postObj[key];
      }
    }
    return objToReturn;
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
