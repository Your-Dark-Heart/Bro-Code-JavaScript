
// children

const element = document.getElementById("deserts");
const children = element.children;
console.log(children);
// returns html collection
Array.from(children).forEach(child => {
  child.style.backgroundColor = "yellow";
});

children[0].style.backgroundColor = "purple";



/* 
// parentElement

const element = document.getElementById("carrots");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
 */



/* 
// previousElementSibling

const element = document.getElementById("deserts");
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "yellow";

*/


/* 
// nextElementSibling

const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";
 */


/* 
// lastElementChild

const element = document.getElementById("vegetables");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
  const lastChild = ulElement.lastElementChild;
  lastChild.style.backgroundColor = "purple";
  lastChild.style.color = "white";
});
 */


/* 
// .firstElementChild

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"; 


const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});
*/