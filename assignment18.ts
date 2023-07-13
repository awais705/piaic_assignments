/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its order has changed.

 */

let arr_countries: string[] = [
  "UAE",
  "Spain",
  "Oman",
  "Saudi Arabia",
  "Georgia",
];

//Print your array in its original order.
arr_countries.map((country) => console.log(country));

//Print your array in alphabetical order without modifying the actual list.
let alph_sort: string[] = [...arr_countries];
console.log("\n Countries array after alphabetical sorting \n");
alph_sort.sort().map((country1) => console.log(country1));

//Show that your array is still in its original order by printing it.
console.log(
  `\n Showing that my array is still in its original order by printing it. \n`
);
arr_countries.map((country2) => console.log(country2));

//Print your array in reverse alphabetical order without changing the order of the original list.
let reverse_sort: string[] = [...arr_countries];
console.log(
  `\n Printing array in reverse alphabetical order without changing the order of the original list \n`
);
reverse_sort.reverse().map((country3) => console.log(country3));

//Show that your array is still in its original order by printing it.
console.log(
  `\n Showing that my array is still in its original order by printing it. \n`
);
arr_countries.map((country2) => console.log(country2));

//Reverse the order of your list. Print the array to show that its order has changed.
console.log(
  `\n Reversing the order of your list. Print the array to show that its order has changed. \n`
);
arr_countries.reverse().map((country4) => console.log(country4));

//Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log(
  `\n Reverse the order of your list again. Print the list to show it’s back to its original order. \n`
);
arr_countries.reverse().map((country5) => console.log(country5));

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log(
  `\n Sorting your array so its stored in alphabetical order. Print the array to show that its order has been changed. \n`
);
arr_countries.sort().map((country6) => console.log(country6));

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
arr_countries.reverse().map((country7) => console.log(country7));
