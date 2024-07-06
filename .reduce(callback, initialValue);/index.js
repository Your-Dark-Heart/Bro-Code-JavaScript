// .reduce() = reduce the elements of the array to a single value


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



const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum, 1000);


console.log(`$${total.toFixed(2)}`);

function sum(total, element) {
  return total + element;
}