function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

sum(displayPage, 1, 15);


function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}




/*
function hello(callback) {
  console.log("Hello!");
  callback();
}

function goodbye() {
  console.log("Goodbye!")
}


hello(goodbye);
*/