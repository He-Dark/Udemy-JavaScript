const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
//   if (numero === 2) {
//     console.log("Pulei o numero 2");
//     continue; // Continue, pula a iteração selecionada e continua o laço
//   }

//   if (numero === 7) {
//     console.log("7 encontrado, saindo...");
//     break; // Assim que encontrar a condição ele sai do laço
//   }

//   console.log(numero);
// }

for (let i in numeros) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log("Pulei o número 2");
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}
