// Tudo o que ocorre no navegador é considerado evento (até mesmo movimentar o mouse)
function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  // onsubmit é apenas quando clicado em enviar(submit), ai vai realizar o que está na função.
  // evento é o nome do parâmetro passado para receber essa função
  // form.onsubmit = function (evento) {
  //   evento.preventDefault();
  //   alert(1);
  //   console.log("Foi enviado");
  // };

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobreNome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    let usuarios = {
      nome: nome.value,
      sobrenome: sobreNome.value,
      peso: peso.value,
      altura: altura.value,
    };

    pessoas.push(usuarios);
    console.log(...pessoas);
    resultado.innerText = `${usuarios.nome} ${usuarios.sobrenome} ${usuarios.peso} ${usuarios.altura}`;
  }
  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
