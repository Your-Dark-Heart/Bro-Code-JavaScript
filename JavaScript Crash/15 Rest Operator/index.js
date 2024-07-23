// Rest Operator ...
// gather/collects item




// Arrays
/*
const fruits = ["apple", "orange", "lemon", "banana"];

const [first, second, ...restOfTheFruits] = fruits;
console.log(first, second, restOfTheFruits);

const specificFruit = restOfTheFruits.find((fruit) => fruit === "lemon");

console.log(specificFruit);
*/


// Objects
/*
const person = { name: "john", lastName: "smith", job: "developer"};
const {job, ...rest} = person;

console.log(job, rest);
*/


// Functions

const getAverage = (name, ...scores) => {
  const average = scores.reduce((total, item) => {
    return total += item;
  }, 0) / scores.length;
  
  console.log(average);
}

const testScores = [7.5, 8, 8, 7.5];

getAverage("Asliddin", 7.5, 7.5, 6.5, 7.5);
getAverage("Asliddin", ...testScores);

