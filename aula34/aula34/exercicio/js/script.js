// Tudo o que ocorre no navegador é considerado evento (até mesmo movimentar o mouse)
function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobreNome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    // let usuarios = {
    //   nome: nome.value,
    //   sobrenome: sobreNome.value,
    //   peso: peso.value,
    //   altura: altura.value,
    // };

    // pessoas.push(usuarios);
    // let pElement = document.createElement("p");
    // resultado.appendChild(pElement);
    // pElement.innerText = pessoas;

    // console.log(pessoas);
    // *** FORMA CORRETA ***

    pessoas.push({
      nome: nome.value,
      sobrenome: sobreNome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobreNome.value} ${peso.value} ${altura.value}</p>`;
  }
  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
