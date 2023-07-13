/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. Have at least one True and one False result for each of
  the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
var text1 = "A Quick Brown Fox jumps over the lazy dog";
var text2 = "A QUIck Brown Fox Jumps over the lazy dog";
console.log(text1 === text2 ? true : false);
console.log(text1.toLowerCase() === text2.toLowerCase() ? true : false);
var value1 = 15;
var value2 = 20;
console.log("\n Number comparision \n");
console.log(value1 == value2 ? true : false);
console.log(value1 > value2 ? true : false);
console.log(value1 < value2 ? true : false);
console.log(value1 >= value2 ? true : false);
console.log(value1 <= value2 ? true : false);
//Tests using "and" and "or" operators
console.log('\n Tests using "and" and "or" operators \n ');
console.log((value1 > 20 && value2 >= 30) || (value1 >= 25 && value2 < 50) ? true : false);
var arr_values = [15, 30, 35, 40, 50, 60];
console.log(arr_values.some(function (match) { return value1 == match; }));
console.log(arr_values.some(function (match) { return value2 !== match; }));
