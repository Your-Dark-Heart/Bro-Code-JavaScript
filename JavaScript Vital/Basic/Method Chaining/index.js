let username = window.prompt("Enter your username");

// No Chaining
/*
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = firstLetter + extraChars;
console.log(username);
*/

// With Chaining
username = username
  .trim()
    .charAt(0)
      .toUpperCase()
         + 
          username.trim().slice(1).toLowerCase();
console.log(username);