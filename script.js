let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []; // procura tarefas no localStorage do navegador e exibe, se não tiver mostra um array vazio

function renderTarefas() {
  listElement.innerHTML = "";

  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let posicao = tarefas.indexOf(todo);

    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

    liElement.appendChild(tarefaText); // adiciona a tarefa mapeada ao li
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement); // adiciona o li ao ul
  });
}
renderTarefas();

function adicionarTarefas() {
  if (inputElement.value === "" || inputElement.value === " ") {
    alert("Digite alguma coisa");
    return false;
  } else {
    let novaTarefa = inputElement.value;

    tarefas.push(novaTarefa);
    inputElement.value = "";

    renderTarefas();
    salvarDados();
  }
}

function deletarTarefa(posicao) {
  tarefas.splice(posicao, 1);
  renderTarefas();
  salvarDados()
}

function salvarDados() {
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}