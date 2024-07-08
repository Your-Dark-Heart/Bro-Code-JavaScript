// .reduce() = reduce the elements of the array to a single value



const numbers = [13, 2, 5];

const sum = numbers.reduce((total, number, index, array) => {
  return total + number;
}, 0);

// But a default value in case the array may be empty

console.log(sum);




/* 
const people = [
  {name: "Kyle", age: 26},
  {name: "John", age: 31},
  {name: "Sally", age: 42},
  {name: "Jill", age: 42}
]


const result = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) {
    groupedPeople[age] = []
  } groupedPeople[age].push(person);
  
  
  return groupedPeople;
}, {});

console.log(result); */


/*
const items = [
  {name: "Rice", price: 5},
  {name: "Book", price: 20},
  {name: "Chicken", price: 10},
  {name: "Monitor", price: 100}
]


// let totalPrice = 0;
// items.forEach(item => {
//   totalPrice += item.price
// })

const totalPrice = items.reduce((total, item)=>{
  return total + item.price
}, 0);


console.log(totalPrice);
*/


/* 
const grades = [75, 500, 90, 80, 65, 95];

const maxium = grades.reduce(getMax, 100);
const minimum = grades.reduce(getMin, 2);

console.log(minimum);


function getMin(min, element) {
  return Math.min(min, element);
}


function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}
 */


/* 
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum, 1000);


console.log(`$${total.toFixed(2)}`);

function sum(total, element) {
  return total + element;
} */