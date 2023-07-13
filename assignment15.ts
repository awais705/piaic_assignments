/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let invited: string[] = ["Kazim", "Hunain", "Ali"];
let notJoining: string = "Hunain";
let NewInvite: string = "Azeem";

//Invite message to friends array
inviteMessage(invited);

if (invited.indexOf(notJoining) !== -1) {
  let indexNotJoining = invited.indexOf(notJoining);
  console.log(`\n ${notJoining} is not coming for dinner \n`);

  // replace current name with the new name
  invited.splice(indexNotJoining, 1, NewInvite);

  // Invite message to array after updation
  inviteMessage(invited);
}

// function to write invite
function inviteMessage(invited_guest: string[]) {
  for (let individual of invited_guest) {
    console.log(
      `hey ${individual}, Join me for a delightful dinner and great company tonight.`
    );
  }
}
