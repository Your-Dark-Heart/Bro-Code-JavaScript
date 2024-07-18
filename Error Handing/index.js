

/*
try {
  const name = prompt("Name: ").trim();
  const age = Number(prompt("Age: "));

  if (!name) {
    throw new Error("Please, enter your name!")
  }

  if (Number(name)) {
    throw new Error("Name cannot be a number!")
  }

  if (!age) {
    throw new Error("Please, enter a valid age!")
  }

  if (age < 18) {
    throw new Error("Sorry, you cannot enter this website, for you are under 18.");
  }
  

  console.log({
    name,
    age
  });
} catch(error) {
  console.error(error);
}
*/



/*
try {
  const dividend = Number(prompt("Enter a dividend: "));
  const divisor = Number(prompt("Enter a divisor: "));
  const result = dividend / divisor;

  if (divisor === 0) {
    throw new Error("You cannot divide by zero!")
  }

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number!")
  }

  console.log(result);

} catch(error) {
  console.log(error)
}

console.log("The end!");
*/



/*
try {
  console.log("Hello!");
} catch(error) {
  console.error(error);
} finally {
  console.log("This always executes!")
}

console.log("The end!");
*/


