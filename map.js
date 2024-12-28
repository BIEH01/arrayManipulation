const letters = ["a", "b", "c"];

//map
newArray = letters.map((item) => item + "++");

//for
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//   const element = letters[index];
//   newArray.push(element + "++");
// }

console.log("Original", letters);
console.log("Nuevo", newArray);
