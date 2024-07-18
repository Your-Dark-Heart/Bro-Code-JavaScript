


// getElementById()
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";







// getElementByClassName()
const fruits = document.getElementsByClassName("fruits");
// Returns a collection which can be iterated with a for loop, not with forEach()
fruits[0].style.backgroundColor = "purple";
fruits[1].style.backgroundColor = "blue";
fruits[2].style.backgroundColor = "darkBlue";
// But you can type cast the collection into a list
Array.from(fruits).forEach((value)=> console.log(value));







// getElementByTagName()

const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.backgroundColor = "purple";
h4Elements[1].style.backgroundColor = "purple";
Array.from(h4Elements).forEach(h4 => h4.style.color = "white");

const liElements = document.getElementsByTagName("li");
Array.from(liElements).forEach(li => li.style.backgroundColor = "lightblue");








// querySlector()
// Selects the first element
const element = document.querySelector(".fruits");
element.style.color = "yellow";







// querySelectorAll()

const fruits2 = document.querySelectorAll(".fruits");
fruits[1].style.color = "white";

const foods = document.querySelectorAll("li");
foods.forEach(li => li.style.color = "purple");