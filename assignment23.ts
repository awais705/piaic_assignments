/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test 
and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let marks: number = 705;
let total_marks: number = 850;
let grade: string = "A-One";

// true, check if grade is equal to A-One
console.log(grade == "A-One" ? true : false);
console.log(marks > 700 ? true : false);
console.log(total_marks > 800 ? true : false);
console.log(total_marks > marks ? true : false);
console.log(grade.length > 0 ? true : false);

console.log(grade.toUpperCase() == "A-One" ? true : false);
console.log(grade.search("two") !== -1 ? true : false);
console.log(marks == total_marks ? true : false);
console.log(marks > total_marks ? true : false);
console.log(grade.toLocaleLowerCase() == "A-one" ? true : false);
