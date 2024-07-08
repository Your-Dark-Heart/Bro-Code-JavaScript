/*
// Swap the values of two variables
let a = 1;
let b = 2;


[aaa, b] = [b, a];

console.log(aaa);
console.log(b);
*/


/*
// Swap 2 elements in an array
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4], colors[1], colors[3]] = [colors[4], colors[0], colors[3], colors[1]];

console.log(colors); 
*/



/*
// Assigh array elements to variables
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/


/* 
// Extract values from objects

const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook"
}

const person2 = {
  firstName: "Patrck",
  lastName: "Star",
  age: 42,
}


// we can give a default value
const {firstName, lastName, age, job = "unemployed"} = person2;
 */





// We can destructre an object right away in the function

function displayPerson({firstName, lastName, age, job = "unemployed"}) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}


const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook"
}

const person2 = {
  firstName: "Patrck",
  lastName: "Star",
  age: 42,
}

displayPerson(person2);