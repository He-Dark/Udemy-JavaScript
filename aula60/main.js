// Escreva uma função que recebe 2 números e retorne o mairo deles

function numeroMaior(num1 = 0, num2 = 0) {
  let comparacao = num1 > num2 ? num1 : num2;
  return comparacao;
  // let comparacao;
  // if (num1 > num2) {
  //   comparacao = num1;
  //   return comparacao;
  // } else {
  //   comparacao = num2;
  //   return comparacao;
  // }
}

const resultado = numeroMaior(110, 215);
console.log(resultado);
