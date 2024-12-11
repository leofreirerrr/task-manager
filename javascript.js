const btnTaskAdd = document.querySelector("#btn-add-task");
let taskList = document.querySelector(".task-list");
let taskInput = document.querySelector("#type-new-task");
const btnDelete = document.querySelector(".task-item i");
let taskItem = document.querySelector(".task-item p");
const bntDeleteAll = document

let tasks = [];

function getTaskName() {
  const taskName = taskInput.value;
  tasks.push(taskName);
  taskInput.value = "";
  return taskName;
}
taskList.addEventListener("click", (event)=> {
  if (event.target.classList.contains("fa-trash")) {
    const vasco = event.target.closest(".task-item")
    console.log(vasco)
    vasco.remove()
    const textRemove = vasco.textContent.trim()
    index = tasks.indexOf(textRemove)
    tasks.splice(index, 1)
    console.log(tasks)
  }
})


btnTaskAdd.onclick = function () {
  const taskName = getTaskName();
  taskList.innerHTML +=
  `<section class = "task-item">
  <p> ${taskName}</p> 
  <i class="fa-solid fa-trash"></i>
  </section>
  <section class="delete-all" `;

  const deleteall = 
  console.log(tasks)
};
