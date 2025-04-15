const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

// for (let p of ps) {
//   console.log(p);
// }

// paragrafos.style.color = "#FFFFFF";
// paragrafos.style.backgroundColor = backgroundColorBody;

// Resolução Professor
for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#FFFFFF";
}
