/* When you get a user input, the data type of it is a string! */


/*
let age = prompt("How old are you? ");
age = Number(age)
age += 1;
console.log(age, typeof age);
*/

let x = "pizza";
let y = "pizza";
let z = "";
let j = "0";
let nothing;

x = Number(x);
console.log(x); /* When you convert non-number string to a number it will be NaN */

z = Boolean(z);
console.log(z); /* Emtpy strings are false; Non-empty ones are true */

j = Boolean(j);
console.log(j) /* I is True because the string has a value */

z = Number(z);
console.log(z, typeof z) /* Empty string will be 0 when turing it into a number */


console.log(Number(nothing));
console.log(String(nothing), typeof String(nothing));