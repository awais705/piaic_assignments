/*More Guests: You just found a bigger dinner table, so now more space is available. Think of 
three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
 program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list.

*/

let invite: string[] = ["Kazim", "Hunain", "Ali"];

/*Invite to all existing friends*/
inviteMessages(invite);

console.log(`\n Now are have more space available ...  \n`);

//Add one new guest to the beginning of your array.
invite.unshift("Zubair");

//Add one new guest to the middle of your array.
invite.splice(Math.floor(invite.length / 2), 0, "Junaid");
//console.log(Math.floor(invite.length / 2));

// Use append() to add one new guest to the end of your list.
invite.push("Khurram");

// Print full list of invites
inviteMessages(invite);

// function to write invite
function inviteMessages(invited_guest: string[]) {
  for (let individual of invited_guest) {
    console.log(
      `hey ${individual}, Join me for a delightful dinner and great company tonight.`
    );
  }
}
