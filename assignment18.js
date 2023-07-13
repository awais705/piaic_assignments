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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr_countries = [
    "UAE",
    "Spain",
    "Oman",
    "Saudi Arabia",
    "Georgia",
];
//Print your array in its original order.
arr_countries.map(function (country) { return console.log(country); });
//Print your array in alphabetical order without modifying the actual list.
var alph_sort = __spreadArray([], arr_countries, true);
console.log("\n Countries array after alphabetical sorting \n");
alph_sort.sort().map(function (country1) { return console.log(country1); });
//Show that your array is still in its original order by printing it.
console.log("\n Showing that my array is still in its original order by printing it. \n");
arr_countries.map(function (country2) { return console.log(country2); });
//Print your array in reverse alphabetical order without changing the order of the original list.
var reverse_sort = __spreadArray([], arr_countries, true);
console.log("\n Printing array in reverse alphabetical order without changing the order of the original list \n");
reverse_sort.reverse().map(function (country3) { return console.log(country3); });
//Show that your array is still in its original order by printing it.
console.log("\n Showing that my array is still in its original order by printing it. \n");
arr_countries.map(function (country2) { return console.log(country2); });
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Reversing the order of your list. Print the array to show that its order has changed. \n");
arr_countries.reverse().map(function (country4) { return console.log(country4); });
