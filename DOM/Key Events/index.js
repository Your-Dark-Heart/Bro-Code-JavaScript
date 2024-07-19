
const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;




document.addEventListener("keydown", () => {
  myBox.textContent = "😜";
  myBox.style.backgroundColor= "tomato";
});

document.addEventListener("keyup", () => {
  myBox.textContent = "😏";
  myBox.style.backgroundColor= "lightblue";
});



document.addEventListener("keydown", event => {
  if (event.key.startsWith("Arrow")) {

    event.preventDefault();

    switch(event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});










/* 
document.addEventListener("keydown", event => {
  console.log(`Key down: ${event.key}`);
});

document.addEventListener("keyup", event => {
  console.log(`Key up: ${event.key}`);
}); 
*/