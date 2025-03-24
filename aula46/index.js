// Sempre que utiliza new estamos falando com uma função construtora.
// Função construtora sempre vai começar com a primeira letra Maiuscula
// new Date () dessa forma vai pegar o horário atual do computador.
// const data = new Date(0); //new Date(0) 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3, 20, 15, 14, 27, 500);
// const data = new Date("2019-04-20 20:20:59");
// console.log("Dia", data.getDate());
// console.log("Mês", data.getMonth() + 1); // Mês começa do zero
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Min", data.getMinutes());
// console.log("Seg", data.getSeconds());
// console.log("ms", data.getMilliseconds());
// console.log("Dia semana", data.getDay()); // 0- Domingo, 6 - Sábado
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
