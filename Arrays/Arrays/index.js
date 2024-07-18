let fruits = ["apple", "orange", "banana"];


fruits[3] = "coconut";


// push
fruits.push("chocolate");



// pop
const chocolate = fruits.pop();


// length
const numOfFruits = fruits.length;



// indexOf
const indexOfApple = fruits.indexOf("apple");
const indexOfNothing = fruits.indexOf("mango")


// looping
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}


// sort
fruits.sort();


// reverse
fruits.reverse();



// Typecasting
Array.from("hello").forEach(char => console.log(char))