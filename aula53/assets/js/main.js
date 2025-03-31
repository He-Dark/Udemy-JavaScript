const resultado = document.querySelector(".resultado");
const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

function criandoP() {
  const { texto } = elementos[0];
  return texto;
}

function criandoDiv() {
  const { texto } = elementos[1];
  return texto;
}

function criandoFooter() {
  const { texto } = elementos[2];
  return texto;
}

function criandoSection() {
  const { texto } = elementos[3];
  return texto;
}

const para = criandoP();
const divisao = criandoDiv();
const pe = criandoFooter();
const secao = criandoSection();
resultado.innerHTML = `<p>${para}</p>\n <div>${divisao}</div>\n <footer>${pe}</footer>\n <section>${secao}</section>`;
