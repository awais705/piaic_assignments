/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. Then use your list to
print a message to each person, inviting them to dinner.
 */
var guests = ["Kazim", "Hunain", "Ali"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var individual = guests_1[_i];
    console.log("hey ".concat(individual, ", Join me for a delightful dinner and great company tonight."));
}
