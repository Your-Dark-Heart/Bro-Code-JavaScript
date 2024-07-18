const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "gold";

// document.getElementById("fruits").prepend(newListItem);



// const apple = document.getElementById("apple");
// document.getElementById("fruits").insertBefore(newListItem, apple);



// const fruits = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, fruits[2]);


document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").removeChild(newListItem);
// document.getElementById("coconut").remove();