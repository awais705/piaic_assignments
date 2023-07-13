/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered.
  Call the function three times, using a different number of arguments each time.

 */

let arr_items: string[] = [
  "Chicken",
  "Beef",
  "Cucumber",
  "Mayyonise",
  "Tomato",
];

summarySandwich(arr_items);
summarySandwich(["Mutton", "Souces", "Cubes", "Brown Bread"]);
summarySandwich(["Chicken", "Souces", "Tomato", "White Bread"]);

function summarySandwich(arr: string[]): void {
  console.log(`The sandwich you ordered have ${arr.join()}`);
}