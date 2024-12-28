const letters = ["a", "b", "c"];

//for
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for", element);
}

//forEach
letters.forEach((item) => console.log("forEach", item));
