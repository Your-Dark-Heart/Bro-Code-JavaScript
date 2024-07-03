/*
let age = 25;
let price = 10.99;
let gpa = 5.0;

console.log(`You are ${age} years old.`);
console.log(`The price is $${price}.`);
console.log(`My GPA is ${gpa.toFixed(1)}`);
*/



/*
let firstName = "Asliddin";
let gpa = 5.0;

console.log(typeof gpa.toFixed(1));
console.log(typeof firstName)
*/


/*
let favoriteFood = "Pizza";
let email = "melikovasliddin555@gmail.com"
console.log(`I love ${favoriteFood}!`);
console.log(`My email is "${email}"`);
*/


/*
let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`Is this car for sale: ${forSale}.`);
console.log(`Enrolled: ${isStudent}`);
*/


/*
let fullName = "Melikov Asliddin";
let age = 18;
let isStudent = false;

document.getElementById("p1").textContent = `Name: ${fullName}`;
document.getElementById("p2").textContent = `Age: ${age}`;
document.getElementById("p3").textContent = `Student: ${isStudent}`;
*/







const PI = 3.14159; /* Making it all capital because it is the universal NUMBER :)*/
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function() {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = `${circumference} cm`;
}