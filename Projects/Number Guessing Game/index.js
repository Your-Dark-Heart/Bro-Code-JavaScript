const minNum = 1;
const maxNum = 100;



const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


let attempts = 0;
let guess;
let running = true;

while(running) {

  guess = Number(prompt(`Guess a number between ${minNum} and ${maxNum}`));
  
  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    alert("Please enter a valid number!")
  } else {
    attempts ++;
    if (guess < answer) {
      alert("TOO LOW! TRY AGAIN!")
    } else if (guess > answer) {
      alert("TOO HIGHT! TRY AGAIN!")
    } else {
      alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts!`);
      running = false;
    }
  }
}