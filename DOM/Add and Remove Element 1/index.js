
//! Create an element
const newH1 = document.createElement("h1");
//! Add Attributes/Properties
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
//! Append to the DOM
//document.body.prepend(newH1); // the first child
//document.body.append(newH1); // the last child
//document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);


// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);


// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

//! Remove from DOM

// document.body.append(newH1);
// document.body.removeChild(newH1);




// document.getElementById("box1").append(newH1);
// document.getElementById("box1").removeChild(newH1);





//document.getElementById("box4").remove()