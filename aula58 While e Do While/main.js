//Estrutura de Repetição While e Do While
/* const nome = "Adriano";
let i = 0;

while (i < nome.length) {
  // Enquanto a i for menor ou igual a 10 ele vai executar o laço (ex: executa 1 vez e verifica a condição)
  console.log(nome[i]);
  i++; // Acrescente 1 a cada execução do laço
}

console.log("Segue a vida..."); */

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}
