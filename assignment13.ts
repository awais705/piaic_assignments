/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or 
a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items, such as 
 “I would like to own a Honda motorcycle.”
 */

let transportation: string[] = ["Ford", "Hyundai", "Toyota"];

for (let mode of transportation) {
  console.log(
    `Owning a ${mode} car is my ultimate dream. \n I long for the exhilaration of riding a ${mode} car. \n My heart yearns for a ${mode} car to call my own.`
  );
}
