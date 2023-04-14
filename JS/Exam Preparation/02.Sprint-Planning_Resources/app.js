window.addEventListener("load", solve);

function solve() {
    const inputData = {
      title: document.getElementById("title"),
      description: document.getElementById("description"),
      label: document.getElementById("label"),
      estimationPoints: document.getElementById("points"),
      assignee: document.getElementById("assignee"),
    };
  
    const stateObj = {
      title: null,
      description: null,
      label: null,
      estimationPoints: null,
      assignee: null
    }
  
    const sectionToFill = document.getElementById('tasks-section');
    const createTaskBtn = document.getElementById("create-task-btn");
    const deleteTaskBtn = document.getElementById("delete-task-btn");
    deleteTaskBtn.disabled = true;
    let totalPoints = document.getElementById("total-sprint-points");
    let pointsCalculator = 0;
    let taskCounter = 0;
  
    createTaskBtn.addEventListener("click", createTaskHandler);
  
    function createTaskHandler(e) {
      e.preventDefault();
       const values = Object.values(inputData);
       const isEveryFieldFilled = values.every((input) => input.value !== '');
       if(!isEveryFieldFilled) {
          return;
       }
  
       ({taskId, title, description, label, estimationPoints, assignee} = inputData);
  
       const parentArticle = createElement('article', '', sectionToFill, `task-${taskCounter += 1}`, ['task-card']);
       const cardLabel = createElement('div', `${label.value}`, parentArticle, '', ['task-card-label', assignClass(label)]);
       assignInnerHTML(cardLabel);
       createElement('h3', `${title.value}`,parentArticle, '', ['task-card-title']);
       createElement('p', `${description.value}`, parentArticle, '', ['task-card-description']);
       createElement('div', `${estimationPoints.value}`, parentArticle, '', ['task-card-points']);
       createElement('div', `${assignee.value}`, parentArticle, '', ['task-card-assignee']);
  
       totalPoints.innerHTML = `Total Points ${pointsCalculator += Number(estimationPoints.value)}pts`;
       const deleteTaskBtnParent = createElement('div', '', parentArticle, '', ['task-card-actions']);
       const deleteBtn = createElement('button', 'Delete', deleteTaskBtnParent);
  
       for (const input in inputData) {
           stateObj[input] = inputData[input].value;
       }

       deleteBtn.addEventListener('click', deleteTaskLoader);

       title.value = '';
       description.value = '';
       label.value = '';
       estimationPoints.value = '';
       assignee.value = '';
    }
  
  
    function deleteTaskLoader (e) {
        e.preventDefault();
        const parentObj = e.currentTarget.parentNode.parentNode;
        let children = Array.from(parentObj.children);
        [childLabel, childTitle, childDescription, childPoints, childAssignee, _actions] = children;
        inputData.title.value = childTitle.innerHTML;
        inputData.description.value = childDescription.innerHTML;
        let splitLabel = childLabel.textContent.split(' ');
        if(splitLabel.length === 2) {
           inputData.label.value = splitLabel[0];
           console.log(splitLabel[0]);
        } else {
            inputData.label.value = splitLabel.splice(0, 3).join(' ');
        }
        inputData.estimationPoints.value = childPoints.innerHTML;
        inputData.assignee.value = childAssignee.innerHTML;

        deleteTaskBtn.disabled = false;
        createTaskBtn.disabled = true;
        let id = e.currentTarget.parentNode;

        inputData.title.disabled = true;
        inputData.description.disabled = true;
        inputData.label.disabled = true;
        inputData.estimationPoints.disabled = true;
        inputData.assignee.disabled = true;

        deleteTaskBtn.addEventListener('click', deleteTaskHandler);

        function deleteTaskHandler() {
            id.parentNode.remove();
            totalPoints.innerHTML = `Total Points ${pointsCalculator -= Number(estimationPoints.value)}pts`;

            inputData.title.value = '';
            inputData.description.value = '';
            inputData.label.value = '';
            inputData.estimationPoints.value = '';
            inputData.assignee.value = '';

            deleteTaskBtn.disabled = true;
            createTaskBtn.disabled = false;
            inputData.title.disabled = false;
            inputData.description.disabled = false;
            inputData.label.disabled = false;
            inputData.estimationPoints.disabled = false;
            inputData.assignee.disabled = false;
        }
    }
    
  
    function assignClass (el) {
      if(el.value === 'Feature') {
        return 'feature';
      } else if(el.value === 'Low Priority Bug') {
        return 'low-priority'; 
      } else if(el.value === 'High Priority Bug') {
        return 'high-priority';
      }
      return className;
    }
  
    function assignInnerHTML(element) {
      if(element.textContent === 'Feature') {
         element.innerHTML += ' &#8865';   
      } else if(element.textContent === 'Low Priority Bug') {
         element.innerHTML += ' &#9737';
      } else if(element.textContent === 'High Priority Bug') {
         element.innerHTML += ' &#9888';
      }
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
