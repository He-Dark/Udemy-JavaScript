// For classico - Geralmente com iteraveis (array ou strings)
// For in - Retorna o indice ou chave (String, array ou objetos)
// For of - Retorna o valor em si (iteraveis, arrays ou strings)
// Para Array qualquer tipo de "For" pode ser utilizado
// Para Objeto nao pode utilizar o "For of"
// 0123...
const nomes = ["Luiz", "Otavio", "Adriano"];
// For classico
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("####");
// For in => Pega o indice do valor
for (let i in nomes) {
  console.log(nomes[i]);
}

console.log("####");
// For of => Pega o valor
for (let valor of nomes) {
  console.log(valor);
}

console.log("####");

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
