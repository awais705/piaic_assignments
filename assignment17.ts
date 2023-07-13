/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
 • Start with your program from Exercise 16. Add a new line that prints a message 
 saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
 from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.
*/

let arr_invite: string[] = ["Zubair", "Kazim", "Junaid", "Hunain", "Ali"];

console.log(
  "Dinner table Not arrived in time for the dinner, and you have space for only two guests \n"
);

/* Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
 from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner. */
for (let i: number = arr_invite.length - 1; i >= 2; i--) {
  console.log(
    `${arr_invite[i]} , Sorry we can not invite you as our Dinner table is not arrived.`
  );
  delete arr_invite[i];
}

console.log(`\n \n`);
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
arr_invite.map((element) =>
  console.log(
    `${element}, You are still invited to our Dinner party, See you soon.`
  )
);

/*Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program. */

arr_invite.splice(0, arr_invite.length);
console.log(arr_invite);
