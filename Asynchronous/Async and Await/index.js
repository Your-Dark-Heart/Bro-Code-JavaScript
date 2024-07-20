// Async/Await 
// Async = makes a function return a promise; 
// Await = makes an async function wait for a promise; 
// We can write an asynchronous code in a synchronous manner





//! Example 1
/* 
function walkDog() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const dogWalked = false;
      if (dogWalked) {
        resolve("You walked the dog!")
      } else {
        reject("You did not walk the dog!")
      }
    }, 1500);
  }); 
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You cleaned the kitchen!")
      } else {
        reject("You did not clean the kitchen!")
      }
    }, 2500);
  }); 
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("You took out the trash!")
      } else {
        reject("You did not take the trash out!")
      }
    }, 500);
  }); 
}


async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
  
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
  
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
  
    console.log("You finished all the chores!")
  }

  catch(error) {
    console.error(error);
  }

}

doChores();






walkDog()
  .then(message => {console.log(message); return cleanKitchen()})
  .then(message => {console.log(message); return takeOutTrash()})
  .then(message => {console.log(message); console.log("You finished all the chores!")})
  .catch(undoneMessage => console.error(undoneMessage));
 */




//! Example 2
/*
const stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["milk", "water"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};


const shopIsOpen = true;

const toppingsChoice = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(
        console.log("Which toopping would you love? ")
      )
    }, 1000);
  });
}


async function kitchen() {
  console.log(" A ")
  console.log(" B ");
  console.log(" C ");

  await toppingsChoice();

  console.log(" D ");
  console.log(" E ");
}


kitchen();


console.log("Doing the dishes");
console.log("Cleaning the tables");
console.log("Taking others' orders");
*/





//! Example 3
/*
const stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["milk", "water"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};


const shopIsOpen = false;


function time(ms) {
  return new Promise((resolve, reject) => {

    if (shopIsOpen) {
      setTimeout(resolve, ms);
    } else {
      reject("Shop is closed!");
    }
  });
}


async function kitchen() {
  try {

    await time(2000);
    console.log(`${stocks.fruits[0].toUpperCase()} was selected!`);

    await time(0);
    console.log("The prodocution has started!");

    await time(2000);
    console.log("The fruit has been cut!");


    await time(1000);
    console.log(`${stocks.liquid[0].toUpperCase()} and ${stocks.liquid[1].toUpperCase()} was added!`);

    await time(1000);
    console.log("Start the machine!");

    await time(2000);
    console.log(`The ice cream was placed on a ${stocks.holder[0]}.`);

    await time(3000);
    console.log(`${stocks.toppings[0].toUpperCase()} was added to the ice cream!`);

    await time(2000);
    console.log("Serve the ice cream! Bonn appetito!")

  }
  catch(error) {
    console.log("Customer left!\n\n", error);
  }
  finally {
    console.log("Day ended, shop is closed!");
  }
}


kitchen();
*/





//! Example 4
/*
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(46);
    }, 1000);
  })
}

async function start1() {
  const result = await getData();
  console.log(result);
}

function start2() {
  getData()
    .then(result => {
      console.log(result);
    });
}

start1();
*/



//! Example 5
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Hello!")
    }, 1222);
  })
}

async function start() {
  try {
    const result = await getData();
    console.log(result);
  }
  catch(error) {
    console.log(`ERROR: ${error}`);
  }
}

start();