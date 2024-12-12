const btnTaskAdd = document.querySelector("#btn-add-task");
let taskList = document.querySelector(".task-list");
let taskInput = document.querySelector("#type-new-task");
const btnDelete = document.querySelector(".task-item i");
let taskItem = document.querySelector(".task-item p");
const btnDeleteAll = document.querySelector("#btn-delete-all");
let tasks = [];

function verifyInput() {
  if (taskInput.value.trim() == "") {
    taskInput.style.border = "solid red";
    taskInput.style.
  } else {
    return true;
  }
}

function getTaskName() {
  const taskName = taskInput.value;
  tasks.push(taskName);
  taskInput.value = "";
  return taskName;
}
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-trash")) {
    const vasco = event.target.closest(".task-item");
    console.log(vasco);
    vasco.remove();
    const textRemove = vasco.textContent.trim();
    index = tasks.indexOf(textRemove);
    tasks.splice(index, 1);
    console.log(tasks);
    if (tasks.length <= 0) {
      btnDeleteAll.style.display = "none";
    }
  }
});

btnTaskAdd.onclick = function () {
  if (verifyInput()) {
    const taskName = getTaskName();
    taskList.innerHTML += `<section class = "task-item">
    <p> ${taskName}</p> 
    <i class="fa-solid fa-trash"></i>
    </section>`;
    btnDeleteAll.style.display = "flex";
    console.log(btnDeleteAll);
  }
};
