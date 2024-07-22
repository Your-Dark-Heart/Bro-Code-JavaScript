for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    break;
  } 

  console.log(i);
}


// continue
/*
for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    continue;
  } 

  console.log(i);
}
*/


// for loops
/*
for(let i = 10; i > 0; i -= 8) {
  console.log(i);
}

console.log("HAPPY NEW YEAR!");
*/


// do loops
/*
let loggedIn = false;
let username;
let password;


do {
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You logged in!")
  } else {
    console.log("Invalid credentials! Please try again!")
  }
} while (!loggedIn);
*/


// while loops
/*
let username;


while(username === null || username === "" || username === undefined) {
  username = prompt("Enter your username:");
}

do {
  username = prompt("Enter your username:");
} while(username === null || username === "");



console.log(`Hello, ${username}`);
*/