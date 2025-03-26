function SemanaTexto(diaSemana) {
  let semanaTexto;

  switch (diaSemana) {
    case 0:
      semanaTexto = "Domingo";
      return semanaTexto;
    case 1:
      semanaTexto = "Segunda-feira";
      return semanaTexto;
    case 2:
      semanaTexto = "Terça-feira";
      return semanaTexto;
    case 3:
      semanaTexto = "Quarta-feira";
      return semanaTexto;
    case 4:
      semanaTexto = "Quinta-feira";
      return semanaTexto;
    case 5:
      semanaTexto = "Sexta-feira";
      return semanaTexto;
    case 6:
      semanaTexto = "Sábado";
      return semanaTexto;
    default:
      semanaTexto = "";
      return semanaTexto;
  }
}

function MesTexto(nomeMes) {
  let mesTexto;

  switch (nomeMes) {
    case 1:
      mesTexto = "Janeiro";
      return mesTexto;
    case 2:
      mesTexto = "Fevereiro";
      return mesTexto;
    case 3:
      mesTexto = "Março";
      return mesTexto;
    case 4:
      mesTexto = "Abril";
      return mesTexto;
    case 5:
      mesTexto = "Maio";
      return mesTexto;
    case 6:
      mesTexto = "Junho";
      return mesTexto;
    case 7:
      mesTexto = "Julho";
      return mesTexto;
    case 8:
      mesTexto = "Agosto";
      return mesTexto;
    case 9:
      mesTexto = "Setembro";
      return mesTexto;
    case 10:
      mesTexto = "Outubro";
      return mesTexto;
    case 11:
      mesTexto = "Novembro";
      return mesTexto;
    case 12:
      mesTexto = "Dezembro";
      return mesTexto;

    default:
      mesTexto = "";
      return mesTexto;
  }
}
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
const data = new Date("10-07-2019 22:52:00");
const diaSemana = data.getDay();
const diaReal = data.getDate();
const mes = data.getMonth() + 1;
const mesReal = MesTexto(mes);
const ano = data.getFullYear();
const hora = zeroAEsquerda(data.getHours());
const minutos = zeroAEsquerda(data.getMinutes());
const semanaTexto = SemanaTexto(diaSemana);

const resp = document.querySelector("h1");
resp.innerText = `${semanaTexto}, ${diaReal} de ${mesReal} de ${ano}\n ${hora}:${minutos}`;
