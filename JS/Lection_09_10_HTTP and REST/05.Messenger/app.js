function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/messenger";
  const sendBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");
  const authorName = document.querySelector("#controls > div:nth-child(1) > input[name=author]");
  const message = document.querySelector("#controls > div:nth-child(2) > input[name=content]");
  const messagesTextArea = document.getElementById("messages");

  sendBtn.addEventListener("click", postRequestHandler);

  function postRequestHandler() {
    const author = authorName.value;
    const content = message.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ author, content }),
    };

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        generateAllMessages();
        authorName.value = "";
        message.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  }

  refreshBtn.addEventListener("click", generateAllMessages);

  function generateAllMessages() {
    messagesTextArea.value = '';
    fetch(BASE_URL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        let output = '';
        for (const line in data) {
          let messageData = data[line];
          output += `${messageData.author}: ${messageData.content}\n`;
        }
        messagesTextArea.value = output.trimEnd()
      });
  }
}

attachEvents();
