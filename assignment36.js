/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and
 the message printed on it. Call the function.
 */
//Function calling
make_shirt("Medium", "Its not over until I win");
function make_shirt(size, message) {
    console.log("Size of Tshirt is ".concat(size, " and message should be ").concat(message));
}
