

const stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["milk", "water"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};



function order(fruitIndex, callProduction) {

  setTimeout(() => {
    console.log(`${stocks.fruits[fruitIndex].toUpperCase()} was selected!`);
    callProduction();
  }, 2000);
}


function production() {
  setTimeout(() => {
    console.log(`Production has started!`);

    setTimeout(() => {
      console.log(`The fruit has been chopped!`);

      setTimeout(() => {
        console.log(`${stocks.liquid[0].toUpperCase()} and ${stocks.liquid[1].toUpperCase()} were added!`);

        setTimeout(() => {
          console.log(`The machine started!`);

          setTimeout(() => {
            console.log(`The ice cream was selected on a ${stocks.holder[0]}.`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0].toUpperCase()} and ${stocks.toppings[1].toUpperCase()} were added as toppings!`);

              setTimeout(() => {
                console.log(`Serve the ice cream!`);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
}

order(0, production);










/* 
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete.");
    callback()
  }, 2000);
  
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete.");
    callback();
  }, 1000);
  
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete.");
    callback();
  }, 3000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete.");
    callback();
  }, 1500);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All tasks complete!");
      });
    });
  });
}); 
*/