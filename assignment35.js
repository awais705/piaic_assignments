/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
 • Modify your program to print a statement about each animal, such as A dog would make a great pet.
  • Add a line at the end of your program stating what these animals have in common.
   You could print a sentence such as Any of these animals would make a great pet! */
var arr_pet = ["Cat", "Dog", "Duck"];
for (var _i = 0, arr_pet_1 = arr_pet; _i < arr_pet_1.length; _i++) {
    var individual = arr_pet_1[_i];
    console.log("".concat(individual, " can be a good fit as Pet animal"));
}
console.log("\nAbove all animals are good option as Pet animal. You can keep it at home also kids play with them \n and they learn very quickly how to respond if strangers come to home. \n Also learn many things over time");
