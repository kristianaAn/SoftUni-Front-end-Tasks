window.addEventListener('click', solve);

function solve() {
    const inputDataObj = {
        genreInput: document.getElementById('genre'),
        songName: document.getElementById('name'),
        singer: document.getElementById('author'),
        creationDate: document.getElementById('date')
    };

    const stateObj = {
      genreInput: null,
        songName: null,
        singer: null,
        creationDate: null
    };

    const collectionToAddTo = document.querySelector('#all-hits > div');
    const addBtn = document.getElementById('add-btn');
    let totalLikes = 0;
    const likesP = document.querySelector('#total-likes > div > p');
    const savedSongsContainer = document.querySelector('#saved-hits > div');

    addBtn.addEventListener('click', moveToCollectionHandler);

    function moveToCollectionHandler(e) {
      e.preventDefault();
      const objValues = Object.values(inputDataObj);
      let allHaveValues = objValues.every((attr) => attr.value !== '');
      if(!allHaveValues) {
         return;
      }

      ({genreInput, songName, singer, creationDate} = inputDataObj);
       const parentDiv = createElement('div', '', collectionToAddTo, '', ['hits-info']);
       createElement('img', '', parentDiv, '', '', {src: './static/img/img.png'});
       createElement('h2', `Genre: ${genreInput.value}`, parentDiv);
       createElement('h2', `Name: ${songName.value}`, parentDiv);
       createElement('h2', `Author: ${singer.value}`, parentDiv);
       createElement('h3', `Date: ${creationDate.value}`, parentDiv);

       const saveBtn = createElement('button', 'Save song', parentDiv, '', ['save-btn']);
       const likeBtn = createElement('button', 'Like song', parentDiv, '', ['like-btn']);
       const deleteBtn = createElement('button', 'Delete', parentDiv, '', ['delete-btn']);

       likeBtn.addEventListener('click', incrementLikesHandler);
       saveBtn.addEventListener('click', saveSongHandler);
       deleteBtn.addEventListener('click', deleteSongHandler);

       for (const attr in inputDataObj) {
          stateObj[attr] = inputDataObj[attr].value;
       }

       genreInput.value = '';
       songName.value = '';
       singer.value = '';
       creationDate.value = '';
    }

    function incrementLikesHandler(e) {
      likesP.textContent = `Total Likes: ${totalLikes += 1}`;
      e.currentTarget.disabled = true;
    }

    function saveSongHandler(e) {
      const reference = e.currentTarget.parentNode;
      savedSongsContainer.appendChild(reference);
      reference.querySelector('.save-btn').remove();
      reference.querySelector('.like-btn').remove();

      deleteButton.addEventListener('click', deleteSongHandler);
    }

    function deleteSongHandler(event) {
      const parentToDeleteContent = event.currentTarget.parentNode;
      parentToDeleteContent.remove();
    }

    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);
      
        if (content && type !== 'input' && type !== 'textarea') {
          htmlElement.textContent = content;
        }
      
        if (content && (type === "input" || type === 'textarea')) {
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