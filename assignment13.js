/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or
a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items, such as
 “I would like to own a Honda motorcycle.”
 */
var transportation = ["Ford", "Hyundai", "Toyota"];
for (var _i = 0, transportation_1 = transportation; _i < transportation_1.length; _i++) {
    var mode = transportation_1[_i];
    console.log("Owning a ".concat(mode, " car is my ultimate dream. \n I long for the exhilaration of riding a ").concat(mode, " car. \n My heart yearns for a ").concat(mode, " car to call my own.\n    "));
}
