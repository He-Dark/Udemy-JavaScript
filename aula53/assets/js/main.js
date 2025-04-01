const resultado = document.querySelector("div");
const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

resultado.innerHTML = `<p>${elementos[0].texto}</p>\n <div>${elementos[1].texto}</div>\n <footer>${elementos[2].texto}</footer>\n <section>${elementos[3].texto}</section>`;
