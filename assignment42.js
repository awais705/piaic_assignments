/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
 */
var arr_magician = [
    "David Seth Kotkin",
    "Harry Houdini",
    "David Blaine",
    "Christopher Nicholas",
    "Steven Frayne",
];
console.log(make_great(arr_magician));
function make_great(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = "The Great ".concat(arr[i]);
    }
    return arr;
}
