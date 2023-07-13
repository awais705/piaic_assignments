// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var personName: string = "Mohammad Awais";

//Lowercase
console.log(personName.toLowerCase());

//Uppercase
console.log(personName.toUpperCase());

//Title Case
console.log(convertTitleCase(personName));

//Title case Function
function convertTitleCase(pname: string): string {
  return pname
    .toLowerCase()
    .split(" ")
    .map(function (word): string {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
