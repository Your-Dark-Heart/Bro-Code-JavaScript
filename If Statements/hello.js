const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement");
let age;


mySubmit.onclick = function() {

  age = Number(myText.value);


  if (age >= 100) {
    resultElement.textContent = `You are TOO OLD to enter this site!`;

  }  else if (age < 0) {
    resultElement.textContent = `Your age cannot be below 0! Idiot!`;

  } else if (age === 0) {
    resultElement.textContent = `You cannot enter. You were just born.`;

  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to enter this site!`;

  } else {
    resultElement.textContent = "You must me 18+ to enter this site!";
  }
}






/*
let isStudent = true;

if (isStudent) {
  console.log("You are a student!")
} else {
  console.log("You are not a student!")
}
*/




