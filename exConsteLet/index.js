// Luiz Otávio Miranda tem 30 anos, pesa 84kg tem 1.8 altura e seu IMC é de 25.92

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 45;
const peso = 84;
const altura = 1.8;

let imc = peso / (altura * altura);
let anoNascimento = 2025 - idade;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg \n tem ${altura} de altura e seu IMC é de ${imc}\n ${nome} nasceu em ${anoNascimento}.`
);
