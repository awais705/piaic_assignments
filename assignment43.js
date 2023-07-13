/*Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged,
 return the new array and store it in a separate array. Call show_magicians() with each array to show that you
 have one array of the original names and one array with the Great added to each magician’s name.
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
var orignal_magician = [
    "David Seth Kotkin",
    "Harry Houdini",
    "David Blaine",
    "Christopher Nicholas",
    "Steven Frayne",
];
var great_mag = make_great(__spreadArray([], orignal_magician, true));
console.log(great_mag);
console.log(orignal_magician);
function make_great(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = "The Great ".concat(arr[i]);
    }
    return arr;
}
