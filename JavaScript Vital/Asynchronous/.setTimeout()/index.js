// setTimeout is approximate, do not use it for precision

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => {
    alert("Hello!")
  }, 3000);
  console.log("Started!")
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("Ended!")
}








/* 
const setTimeoutId = setTimeout(() => {
  alert("Hello!")
}, 3000);

clearTimeout(setTimeoutId); 
*/


/*
function sayHello() {
  alert("Hello!")
}

setTimeout(sayHello, 3000);
*/

