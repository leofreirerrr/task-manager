const btnTaskAdd = document.querySelector("#btn-add-task");
let taskList = document.querySelector(".task-list");
let taskInput = document.querySelector("#type-new-task");
const btnDelete = document.querySelector(".task-item i");
let taskItem = document.querySelector(".task-item p");

let tasks = [];

function getTaskName() {
  const taskName = taskInput.value;
  tasks.push(taskName);
  taskInput.value = "";
  return taskName;
}
function deleteTask(taskName) {
  let taskItem = document.querySelector(".task-item p");
}

btnTaskAdd.onclick = function () {
  const taskName = getTaskName();
  taskList.innerHTML +=
  `<section class = "task-item">
  <p> ${taskName}</p> 
  <i class="fa-solid fa-trash"></i>
  </section>`;
};
