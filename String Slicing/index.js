const fullName = "Melikov Asliddin";

const email = "melikovasliddin555@gmail.com";

const userName = email.slice(0, email.indexOf("@"));
const extension = email.slice(email.indexOf("@") + 1)
console.log(extension);




/*
let lastName = fullName.slice(0, fullName.indexOf("v") + 1);
let firstName = fullName.slice(fullName.indexOf("A"), fullName.lastIndexOf("n") + 1)

console.log(firstName);
*/



/*
// Inclusive, Exclusive
let lastName = fullName.slice(0, 7);
// Ending index is not necesary if you want to go to the end
let firstName = fullName.slice(8);

let firstChar = fullName.slice(0, 1);

// With negative index, just one number!
let lastChar = fullName.slice(-2);
console.log(lastChar);
*/

