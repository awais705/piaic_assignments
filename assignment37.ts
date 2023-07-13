/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
 I love TypeScript. Make a large shirt and a medium shirt with the default message, 
 and a shirt of any size with a different message.
*/

make_shirt();
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small");

function make_shirt(size: string = "Large") {
  if (size == "Large" || size == "Medium") {
    console.log("I love TypeScript");
  } else {
    console.log("I love Javascript");
  }
}
