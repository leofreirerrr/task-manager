btnTaskAdd.onclick = function () {
    console.log(getTaskName());
    console.log(tasks)
    taskList.innerHTML += `<section class = "task-item"> <p> ${getTaskName()}  <i class="fa-solid fa-trash"></i></p></section>`;
    taskName.textContent = "";
  };
  // taskList.addEventListener(Event, () => {
  //   Event.
  // })