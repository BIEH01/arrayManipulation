const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}

console.log("for", newArray);

//concat
const rta = elements.concat(otherElements);
console.log("concat", rta);

//spread operator
const rta2 = [...elements, ...otherElements];
console.log("...", rta2);

//modify original
elements.push(...otherElements);
console.log("elements", elements);
