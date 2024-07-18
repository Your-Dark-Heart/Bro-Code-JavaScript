const display = document.getElementById("display");


function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let result = eval(display.value);
    if (result === Infinity || !result) {
      throw new Error();
    }

    display.value = result;
  }
  catch(error) {
    setTimeout(() => display.value = "", 2200);
    display.value = "Error!";
  }
}


function removeLast() {
  let expression = display.value;
  display.value = expression.slice(0, -1);
}
