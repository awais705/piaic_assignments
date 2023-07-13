/*
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
// Using
var names = ["Ali", "Kazim", "Ovais", "Mubashir", "Hunain"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var x = names_1[_i];
    console.log("".concat(x, " \n"));
}
//Other way
for (var i = 0; i < names.length; i++) {
    console.log("".concat(names[i], " \n"));
}
