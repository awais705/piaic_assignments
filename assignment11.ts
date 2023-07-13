/*
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/

// Using
var names: string[] = ["Ali", "Kazim", "Ovais", "Mubashir", "Hunain"];
for (let x of names) {
  console.log(`${x} \n`);
}

//Other way
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]} \n`);
}
