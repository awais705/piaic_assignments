/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array. */
var arr_magicians = [
    "David Seth Kotkin",
    "Harry Houdini",
    "David Blaine",
    "Christopher Nicholas",
    "Steven Frayne",
];
printMagicians(arr_magicians);
function printMagicians(mag) {
    for (var _i = 0, mag_1 = mag; _i < mag_1.length; _i++) {
        var individual = mag_1[_i];
        console.log("".concat(individual));
    }
}
