const buttonElement = document.getElementById("js-roll-dice-button");


const stringNumbers = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six"
}



buttonElement.addEventListener("click", () => {
  const numOfDice = Number(document.getElementById("js-num-of-dice").value);
  const diceResult = document.getElementById("js-dice-result");
  const diceImages = document.getElementById("js-dice-images");
  const values = [];
  const images = [];


  for(let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    let stringValue = stringNumbers[value];
    images.push(`<span class="fa-solid fa-dice-${stringValue}"></span>`);
  }

  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
})


