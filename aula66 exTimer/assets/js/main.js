function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;
function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}
// e.target está capturando a onde eu estou clicando na página
document.addEventListener("click", function (e) {
  const el = e.target; // const el está armazenando o local que foi clicado

  if (el.classList.contains("zerar")) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    relogio.style.color = "black";
    segundos = 0;
  }

  if (el.classList.contains("iniciar")) {
    clearInterval(timer);
    iniciaRelogio();
    relogio.style.color = "black";
  }

  if (el.classList.contains("pausar")) {
    relogio.style.color = "red";
    clearInterval(timer);
  }
});

/* o bloco acima está simplificado
iniciar.addEventListener("click", function (event) {
  clearInterval(timer);
  iniciaRelogio();
  relogio.style.color = "black";
});

pausar.addEventListener("click", function (event) {
  relogio.style.color = "red";
  clearInterval(timer);
});

zerar.addEventListener("click", function (event) {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  relogio.style.color = "black";
  segundos = 0;
}); */
