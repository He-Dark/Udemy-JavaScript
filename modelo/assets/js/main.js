const frm = document.querySelector("form");
const resp = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const peso = frm.inPeso.value;
  const altura = parseFloat(frm.inAltura.value);
  const resultado = peso / (altura * altura);

  if (altura < 1.3) {
    resp.innerHTML = `Altura inválida`;
  } else if (peso < 20) {
    resp.innerHTML = `Peso inválido`;
  } else {
    let tipo;
    if (resultado < 18.5) {
      tipo = "Abaixo do peso";
      resp.innerHTML = `IMC é : ${resultado.toFixed(2)} Resultado: ${tipo}`;
      resp.style.backgroundColor = "aqua";
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      tipo = "Peso normal";
      resp.innerHTML = `IMC é : ${resultado.toFixed(2)} Resultado: ${tipo}`;
      resp.style.backgroundColor = "aqua";
    } else if (resultado >= 25 && resultado <= 29.9) {
      tipo = "Sobrepeso";
      resp.innerHTML = `IMC é : ${resultado.toFixed(2)} Resultado: ${tipo}`;
      resp.style.backgroundColor = "aqua";
    } else if (resultado >= 30 && resultado <= 34.9) {
      tipo = "Obesidade grau 1";
      resp.innerHTML = `IMC é : ${resultado.toFixed(2)} Resultado: ${tipo}`;
      resp.style.backgroundColor = "aqua";
    } else if (resultado >= 35 && resultado <= 39.9) {
      tipo = "Obesidade grau 2";
      resp.innerHTML = `IMC é : ${resultado.toFixed(2)} Resultado: ${tipo}`;
      resp.style.backgroundColor = "aqua";
    } else if (resultado > 40) {
      tipo = "Obesidade grau 3";
      resp.innerHTML = `IMC é : ${resultado.toFixed(2)} Resultado: ${tipo}`;
      resp.style.backgroundColor = "aqua";
    }
  }
});
