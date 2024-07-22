//! Wrap a promise object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// Do these chores in order

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH





//* Callback Hell!
/* 
function walkDog(callback) {
  setTimeout(() => {
    console.log("You walked the dog!");
    callback();
  }, 1500);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("You cleaned the kitchen!");
    callback();
  }, 2500);
}

function takeOutTrash(callback) {
  setTimeout(() => {
    console.log("You took out the trash!");
    callback();
  }, 500);
}


walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => {
      console.log("You have finished all the chores!")
    });
  });
}); 
*/




//! Example 1
/*
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const dogWalked = false;

      if (dogWalked) {
        resolve("You walked the dog!")
      }
      else {
        reject("You did not walk the dog!")
      }

    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const kitchenCleaned = false;

      if (kitchenCleaned) {
        resolve("You cleaned the kitchen!")
      }
      else {
        reject("You did not clean the kitchen!")
      }


    }, 2000);
  })
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const trashTakenOut = true;

      if (trashTakenOut) {
        resolve("You took the trash out!")
      }

      else {
        reject("You did not take out the trash!")
      }


      
    }, 500);
  });
}


walkDog() .then(value => {console.log(value); return cleanKitchen()})
          .then(value => {console.log(value); return takeOutTrash()})
          .then(value => {console.log(value); console.log("Finished!")})
          .catch(error => console.error(error));
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

function order(time, work) {
  return new Promise((resolve, reject) => {
    if (shopIsOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    }
    else {
      reject("Our shop is closed!");
    }
  });
}


order(2000, () => console.log(`${stocks.fruits[0]} was selected!`))

.then(()=> {
  return order(500, () => console.log("The production has started!"));
})


.then(() => {
  return order(2000, () => console.log("The fruit was chopped!"));
})


.then(() => {
  return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected!`));
})


.then(() => {
  return order(1000, () => console.log("Start the machine!"));
})

.then(() => {
  return order(2000, () => console.log(`The ice cream was placed on a ${stocks.holder[0]}`));
})

.then(() => {
  return order(3000, () => console.log(`${stocks.toppings[0]} was selected!`))
})


.then(() => {
  return order(1000, () => console.log("The ice cream was served!"))
})

.catch(error => {
  console.log(error); console.log("The customers left!")
})


.finally(() => {
  console.log("The day ended, the shop is closed!")
});
*/







//! Example 3
/*
const apiIsWorking = true;
const weatherTypeLookingFor = "Cloudy";


function getWeather() {
  return new Promise((resolve, reject) => {

    if (apiIsWorking) {
      setTimeout(() => {
        resolve(weatherTypeLookingFor);
      }, 2000);
    } 
    else {
      reject("API IS NOT WORKING!");
    }
  }
);
}

function getWeatherIcon(weather) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch(weather) {
        case "Sunny":
          resolve("☀️");
          break;
        case "Cloudy":
          resolve("☁️");
          break;
        case "Rainy":
          resolve("🌧️");
          break;
        default:
          reject("NO ICON FOUND")
      }
    }, 1000);
  })
}


getWeather()
  .then(getWeatherIcon)  // .then((data) => getWeatherIcon(data))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
*/




//! Example 4
/*
function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("404");
    }, 1000);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("😏");
    }, 1000);
  })
}

function onSuccess(data) {
  console.log(data);
}

function onFail(error) {
  console.log(`ERROR: ${error}`);
}

function finalMessage() {
  console.log("GIGIDI GIGIDI")
}

fun1()
  .then(fun2)
  .then(onSuccess)
  .catch(onFail)
  .finally(finalMessage);
*/




//! Example 5
/*
const p = new Promise((resolve, reject) => {
  const a = 1 + 1;
  if (a === 2) {
    resolve("Success!");
  }
  else {
    reject("Failed!")
  }
});

p
  .then((message) => {
    console.log(message)
  })
  .catch((error) => {
    console.log(error)
  });
*/





//! Example 6
/*
const userLeft = false;
const userWatchingCatMeme = false;


function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":("
      })
    }
    else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "Asliddin < Cat"
      })
    }
    else {
      resolve("Hello, my friend!")
    }
  });
}

watchTutorialPromise()
  .then(message => console.log("Success: " + message))
  .catch(error => console.log(error.name + "\n" + error.message));
*/

