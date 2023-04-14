function solve(inputArr) {
  let n = Number(inputArr.shift());
  let initialTasks = inputArr.splice(0, n);
  //{assignee}:{taskId}:{title}:{status}:{estimatedPoints}
  let assigneesObj = {};
  let toDoPoints = 0;
  let inProgressPoints = 0;
  let codeReviewPoints = 0;
  let donePoints = 0;

  for (let line of initialTasks) {
    const [ assignee, taskId, title, status, estimatedPoints ] = line.split(":");
    if(!assigneesObj.hasOwnProperty(assignee)) {
      assigneesObj[assignee] = [{'taskId': taskId, 'title': title, 'status':status, 'estimatedPoints':estimatedPoints}];
    } else {
      let task = {'taskId': taskId, 'title': title, 'status':status, 'estimatedPoints':estimatedPoints};
      assigneesObj[assignee].push(task);
    }
  }

  for (const line of inputArr) {

    if(line.startsWith('Add New')) {
      let [command, assignee, taskId, title, status, estimatedPoints] = line.split(':');
        if(!assigneesObj.hasOwnProperty(assignee)) {
           console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          let assigneeValues = assigneesObj[assignee];
          assigneeValues.push({taskId: taskId, title: title, status: status, estimatedPoints: Number(estimatedPoints)});
        }

    } else if(line.startsWith('Change Status')) {
      let [command, assignee, taskId, newStatus] = line.split(':');

      if(assigneesObj.hasOwnProperty(assignee)) {
        let assigneeTasks = assigneesObj[assignee];
        for (const task of assigneeTasks) {
          if(task.taskId === taskId) {
            task.status = newStatus;
          } else {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
          }
        }
      } else if(!assigneesObj.hasOwnProperty(assignee)) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }
      
    } else if(line.startsWith('Remove Task')) {
      let [command, assignee, index] = line.split(':');
      let assigneeTasks = assigneesObj[assignee];

      if(!assigneeTasks) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      } else if(Number(index) >= assigneeTasks.length || index < 0) {
        console.log('Index is out of range!');
      } else {
        assigneeTasks.splice(index, 1);
      }
    }
  }

  for (const key in assigneesObj) {
     let currAssigneeTasks = assigneesObj[key];
     for (const task of currAssigneeTasks) {
      let taskType = task.status;
      let taskPoints = Number(task.estimatedPoints);

       if(taskType === 'ToDo') {
          toDoPoints += taskPoints;
       } else if(taskType === 'In Progress') {
          inProgressPoints += taskPoints;
       } else if(taskType === 'Code Review') {
          codeReviewPoints += taskPoints
       } else if (taskType === 'Done') {
          donePoints += taskPoints;
       }
     }
  }

  console.log(`ToDo: ${toDoPoints}pts`);
  console.log(`In Progress: ${inProgressPoints}pts`);
  console.log(`Code Review: ${codeReviewPoints}pts`);
  console.log(`Done Points: ${donePoints}pts`);

  let nonCompleted = toDoPoints + inProgressPoints + codeReviewPoints;

  if(donePoints >= nonCompleted) {
    console.log('Sprint was successful!');
  } else {
    console.log('Sprint was unsuccessful...');
  }

}

solve([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP-1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);

// solve([
//   '4', 
//   'Kiril:BOP-1213:Fix Typo:Done:1', 
//   'Peter:BOP-1214:New Products Page:In Progress:2', 
//   'Mariya:BOP-1215:Setup Routing:ToDo:8', 
//   'Georgi:BOP-1216:Add Business Card:Code Review:3', 
//   'Add New:Sam:BOP-1237:Testing Home Page:Done:3', 
//   'Change Status:Georgi:BOP-1216:Done', 
//   'Change Status:Will:BOP-1212:In Progress', 
//   'Remove Task:Georgi:3', 
//   'Change Status:Mariya:BOP-1215:Done', 
// ]);
