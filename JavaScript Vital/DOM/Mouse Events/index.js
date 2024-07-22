const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton")

function changeColor(event) {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch! 🤕"
}


/*
//myBox.addEventListener("click", changeColor);

myBox.addEventListener("click", event => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch! 🤕";
});

myBox.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't do it! 😏";
});

myBox.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me 😜";
});
*/


myButton.addEventListener("click", () => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "Ouch! 🤕";
});

myButton.addEventListener("mouseover", () => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it! 😏";
});

myButton.addEventListener("mouseout", () => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click Me 😜";
});


