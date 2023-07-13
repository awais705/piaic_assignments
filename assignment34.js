/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
 and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
 For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
 The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
  such as I really love pizza! */
var fav_pizza = ["Arabian Ranches", "Mughlai", "Malai Boti"];
for (var _i = 0, fav_pizza_1 = fav_pizza; _i < fav_pizza_1.length; _i++) {
    var individual = fav_pizza_1[_i];
    console.log("I like ".concat(individual, " pizza."));
}
console.log("\n I am a food lover and really like pizzas but mostly desi flavours. best time to eat pizza \n is in evening time with your friends or family and \n mostly we go on weekends , I like Broadway pizza as it is good and near to my home \n We order pizza at home sometime when my Son Hamza want to eat late night. ");
