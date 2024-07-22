// closure => A function defined inside of another function. The inner function has access to the variables and scope of the outer function.


/* 
function outer() {
  let message = "hello!"

  function inner() {
    console.log(message)
  }

  inner();
}

outer(); 
*/


/* 
function createCounter() {

  let count = 0;

  function increment() {
    count++;
    console.log(`Count is icreased to ${count}`);
  }

  function decrement() {
    count--;
    console.log(`Count is decreased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return {increment, decrement, getCount, count};
}

const counter = createCounter();
counter.increment();
counter.decrement();
counter.increment();
counter.increment();

console.log(counter.getCount());
console.log(counter.count)

*/




function createGame() {

  let score = 0;

  function inceaseScore(points) {
    score += points;
    console.log(`+${points} points`);
  }

  function decreaseScore(points) {
    score -=  points;
    console.log(`-${points} points`)
  }


  function getScore() {
    return score;
  }

  return {inceaseScore, decreaseScore, getScore}
}

const game = createGame();
game.inceaseScore(100);
game.inceaseScore(200);
game.decreaseScore(100);

console.log(`The final score is ${game.getScore()} points!`);