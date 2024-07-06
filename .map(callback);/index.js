// .map(callback) = accepts a callback and applies that function to each element of an array, them return a NEW array



const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

  

/* 
const students = ["spongebob", "satrick", "squidward", "sandy"];
const studentsUpperCased = students.map(upperCase);
const studentsLowerCased = students.map(lowerCase);





function lowerCase(element) {
  return element.toLowerCase();
}

function upperCase(element, index, array) {
  return element.toUpperCase();
} */


/* 
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);


console.log(numbers);
console.log(squares);
console.log(cubes);



function cube(element, index, array) {
  return Math.pow(element, 3);
}


function square(element, index, array) {
  return Math.pow(element, 2)
} */