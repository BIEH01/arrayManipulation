const elements = ["fire", "air", "water"];

let rtaF = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaF = rtaF + element + separator;
}
console.log("for", rtaF);

//join
const rta = elements.join("--");
console.log("join", rta);

//split
const title = "Curso de manipulación de arrays";
const title2 = title.split(" ");
console.log("split", title2);

const titleFinal = title.split(" ").join("-").toLowerCase();
console.log(titleFinal);
