// Delcaração de Função (Function hoisting)
// todas essas declarações vão ser elevadas pelo motor do JS para o topo do arquivo na hora da execução, isso não faz diferença se você chamar a função antes de declarar ela ou depois de declarar
function falaOi() {
  console.log("Oie");
}
// Função são First-class objects (Objetos de primeira classe).
// Pode tratar a função como dado
// Function expression

const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

// Dentro de um objeto, de dois modos
// const obj = {
//   falar: function () {
//     console.log("Estou falando...");
//   },
// };

const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
