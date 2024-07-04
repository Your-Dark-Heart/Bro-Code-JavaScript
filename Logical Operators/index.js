const temp = -2520;



//! && -> and

if (temp > 0 && temp <= 30) {
  console.log("The weather is GOOD!")
} else {
  console.log("The weather is BAD!")
}

//! || -> or

if (temp <= 0 || temp > 30) {
  console.log("The weather is BAD!")
} else {
  console.log("The weather is GOOD!")
}

//! ! -> not

const isSunny = true;

if (!isSunny) {
  console.log("It is cloudy!")
} else {
  console.log("It is sunny!")
}