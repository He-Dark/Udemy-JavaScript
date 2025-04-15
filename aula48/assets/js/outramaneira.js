const resp = document.querySelector(".container h1");
const data = new Date();
resp.innerText = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});
