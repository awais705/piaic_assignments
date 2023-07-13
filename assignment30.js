/*Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

*/
var arr_usernames = ["Lutian", "Doe", "John", "Admin", "Phillip"];
for (var _i = 0, arr_usernames_1 = arr_usernames; _i < arr_usernames_1.length; _i++) {
    var i = arr_usernames_1[_i];
    if (i == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(i, ", thank you for logging in again"));
    }
}
