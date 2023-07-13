/*Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, 
 return the new array and store it in a separate array. Call show_magicians() with each array to show that you 
 have one array of the original names and one array with the Great added to each magician’s name.
 */

let orignal_magician: string[] = [
  "David Seth Kotkin",
  "Harry Houdini",
  "David Blaine",
  "Christopher Nicholas",
  "Steven Frayne",
];

let great_mag: string[] = make_great([...orignal_magician]);

console.log(great_mag);
console.log(orignal_magician);

function make_great(arr: string[]): string[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `The Great ${arr[i]}`;
  }

  return arr;
}
