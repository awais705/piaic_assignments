/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array. */

let arr_magicians: string[] = [
  "David Seth Kotkin",
  "Harry Houdini",
  "David Blaine",
  "Christopher Nicholas",
  "Steven Frayne",
];

printMagicians(arr_magicians);

function printMagicians(mag: string[]): void {
  for (let individual of mag) {
    console.log(`${individual}`);
  }
}
