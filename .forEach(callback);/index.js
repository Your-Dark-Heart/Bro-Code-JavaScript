

let fruits = ["apple", "orange", "banana", "coconut"];


//fruits.forEach(upperCase);

fruits.forEach(capitalize)
fruits.forEach(display);


function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}








function display(fruit) {
  console.log(fruit);
}


function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}



/* 
let numbers = [1, 2, 3, 4, 5];



numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(square);
numbers.forEach(cube);
numbers.forEach(display);




function cube(element, index, array) {
  array[index] = Math.pow(element, 3);
}


function square(element, index, array) {
  array[index] = Math.pow(element, 2);
}


function triple(element, index, array) {
  array[index] = element * 3;
}


function double(element, index, array) {
  array[index] = element * 2;
}


function display(element) {
  console.log(element);
} */