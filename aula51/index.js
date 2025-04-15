const pessoa = {
  nome: "Adriano",
  sobrenome: "Almeida",
  idade: 24,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};
//Atribuição via desestruturação
// const { nome, sobrenome, idade } = pessoa;
const {
  endereco: { rua, numero }, //Estamos acessando o objeto endereço e pegando a rua e o numero
} = pessoa;
console.log(rua, numero);
