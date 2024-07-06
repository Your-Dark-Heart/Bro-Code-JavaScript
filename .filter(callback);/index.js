// .filter(callback) creates a new array by filtering out elements
// It filters with booleans;



const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "cocunut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);



console.log(longWords);


function getLongWords(element) {
  return element.length > 6;
}


function getShortWords(element) {
  return element.length <= 6;
}







/* 
const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(children);



function isChild(element) {
  return element < 18;
}


function isAdult(element) {
  return element >= 18;
}
 */



/* 
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);





function isOdd(element, index, array) {
  return element % 2 !== 0;
}



function isEven(element, index, array) {
  return element % 2 === 0;
}
 */
