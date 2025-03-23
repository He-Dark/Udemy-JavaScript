// Operação Ternária ? :
const pontuacaoUsuario = 1000;
const nivelUsuario = // condição ? 'Valor para verdadeiro' : 'Valor para falso';
  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

const corUsuario = null;
const corPadrao = corUsuario || "Preta"; //Deixando configurado a cor padrão, caso o usuário não escolha nenhuma.
console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//   console.log("Usuário VIP");
// } else {
//   console.log("Usuário normal");
// }
