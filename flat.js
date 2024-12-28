const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(element);
  }
}

console.log("for", newArray);

//flat
const rta = matriz.flat(3);
console.log("flat", rta);
