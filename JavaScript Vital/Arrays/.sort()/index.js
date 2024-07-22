// sort method sorts arrays in string order

/* 
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();


console.log(fruits);
*/


/* 
let numbers = [100, 10, 5, 7, 8, 45, 69, 4, 15];


// numbers.sort();
// console.log(numbers);


// To sort an array with numbers, pass a callback
// DO NOT FORGET TO RETURN!
numbers.sort((a, b) => a - b);

// For reverse order, you can say b - a
numbers.sort((a, b) => b - a);
console.log(numbers); 
*/



/*
const people = [
  {name: "Spongebob", age: 30, gpa: 3.0},
  {name: "Patrick", age: 37, gpa: 1.5},
  {name: "Squidward", age: 51, gpa: 2.5},
  {name: "Sandy", age: 27, gpa: 4.0},
];

people.sort((a, b) => a.age - b.age);
//people.sort((a, b) => b.age - a.age); // for reverse order


console.log(people);
*/




// Sort by strings formula

const people = [
  {name: "Spongebob", age: 30, gpa: 3.0},
  {name: "Patrick", age: 37, gpa: 1.5},
  {name: "Squidward", age: 51, gpa: 2.5},
  {name: "Sandy", age: 27, gpa: 4.0},
];


people.sort((a, b) => a.name.localeCompare(b.name));
//people.sort((a, b) => b.name.localeCompare(a.name)); // for reverse order

console.log(people);


