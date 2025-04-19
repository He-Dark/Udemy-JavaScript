const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = ""; /* Limpa o campo do input    */
  inputTarefa.focus(); /* Vai retornar para o input, sem que o usuário precise clicar novamente no input  */
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  // botaoApagar.classList.add("apagar");
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute(
    "title",
    "Apagar esta tarefa"
  ); /* Ao posicionar o mouse em cima do botão apagar, vai exibir a mensagem "Apagar esta tarefa"  */
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefa();
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

// Pegando o click no documento com a função 'e' e armazenando na variável el (de elemento) e.target é o alvo que foi clicado no caso o lugar que recebeu o click
document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    /* Se clicado em apagar(botão apagar)  */
    el.parentElement.remove(); /* está selecionando o elemento pai do apagar, que seria a <li> que foi criada*/
    salvarTarefa();
  }
});

function salvarTarefa() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto
      .replace("Apagar", "")
      .trim(); /* Replace para remover o apagar e .trim para remover o espaço  */
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON =
    JSON.stringify(listaDeTarefas); /*.stringify converte o JSON para string  */
  localStorage.setItem(
    "tarefas",
    tarefasJSON
  ); /* Salvando no localStorage.setItem para definir o que vai salvar  */
}

function adicionaTarefasSalvas() {
  const tarefas =
    localStorage.getItem("tarefas"); /* .getItem para pegar a tarefas  */
  const listaDeTarefas =
    JSON.parse(tarefas); /* Convertendo novamente para um Objeto JavaScript */

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
