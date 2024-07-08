const fruits = [
  {name: "apple", color: "red", calories: 95}, 
  {name: "orange", color: "orange", calories: 45}, 
  {name: "banana", color: "yellow", calories: 105},
  {name: "coconut", color: "white", calories: 159},
  {name: "pineapple", color: "yellow", calories: 37}
]


/* 
fruits.push({name: "grapes", color: "purple", calories: 62});

// splice - removes elements in a certain range
// Start from this index, and remove 2 elements including itself
console.log(fruits.splice(0, 2));


console.log(fruits);
*/



/* 
// forEach()
fruits.forEach(fruit => {
  console.log(fruit.name, fruit.calories)
}); 
*/



/* 
// map()
const fruitNames = fruits.map(fruit => {
  return fruit.name;
});

const fruitColors = fruits.map(fruit => {
  return fruit.color
});

const fruitColories = fruits.map(fruit => {
  return fruit.calories;
}); 
*/



/* 
// filter()
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruits => fruits.calories < 100);
const highCalFruits = fruits.filter(fruits => fruits.calories >= 100);

console.log(highCalFruits); 
*/



const maxCalorie = fruits.length ? fruits.reduce((max, fruit) => {
  return fruit.calories > max.calories ? 
  fruit: max;
}, {calories: 0}) : null;

const minCalorie = fruits.length? fruits.reduce((min, fruit) => {
  return fruit.calories < min.calories ? 
  fruit: min
}, {calories: Infinity}) : null;


console.log(maxCalorie);