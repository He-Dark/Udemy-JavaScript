// function soma(x, y) {
//   const resultado = x + y
//   return resultado //Se colocar return o interpretador não lê mais nada que está abaixo
// }
function soma(x = 1, y = 1) {
  // Sempre que não for enviado algum parâmetro x e y assume o valor 1 ou qualquer outro valor que for atribuido a eles.
  const resultado = x + y;
  return resultado; //Se colocar return o interpretador não lê mais nada que está abaixo
} // Essa é uma declaração clássica de função.

const resultado = soma();
console.log(resultado);
// console.log(soma('Adriano', 'Gomes'))
// console.log(soma(3, 1))
// console.log(soma(5, 10))
// console.log(resultado);

// function saudacao (nome){

//   return `Bom dia ${nome}!`;
// }
// Qualquer função criada em JavaScript vai retornar undefined, caso você não especifique o que você quer que a função retorne.

// Colocando a função dentro da variável, a famosa função anônima.

// const raiz = function(n) {
//   return n ** 0.5;
// };

// Simplificando a função de cima da raiz
const raiz = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
