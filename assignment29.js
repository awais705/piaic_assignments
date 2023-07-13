/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
var favorite_fruits = ["Mango", "Banana", "Apple"];
if (favorite_fruits.indexOf("Mango") !== -1) {
    console.log("You really like Mango");
}
if (favorite_fruits.indexOf("Banana") !== -1) {
    console.log("You really like Banana");
}
if (favorite_fruits.indexOf("Apple") !== -1) {
    console.log("You really like Apple");
}
