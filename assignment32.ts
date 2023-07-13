/*Checking Usernames: Do the following to create a program that simulates how websites ensure that
 everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print 
a message that the person will need to enter a new username. If a username has not been used, print a 
message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

let current_users: string[] = [
  "awais705",
  "siraj665",
  "tedijo705",
  "student705",
  "ovi9663",
];
let new_users: string[] = [
  "zubi852",
  "awais705",
  "sudi741",
  "student705",
  "avi963",
];

for (let individual of new_users) {
  if (current_users.indexOf(individual) !== -1) {
    console.log("Username is available");
  } else {
    console.log("You will need to enter a new username");
  }
}
