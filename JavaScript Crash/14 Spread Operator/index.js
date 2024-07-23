// Spread Operator ...
//! Helps to copy arrays and objects, not their reference!
// Split into single items and COPY them



/*
const udemy = "udemy";

const lettersInObject = {...udemy};
const lettersInArray = [...udemy];

console.log(lettersInObject);
console.log(lettersInArray);
*/






const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];
const bestFriend = "arnold";

/*
const friends = [...boys, bestFriend, ...girls,];
// It is copying, not referencing
console.log(friends);
*/

/*
// Copy
const newFriends = [...friends];
newFriends[0] = "Asliddin";
console.log(friends);
*/

/*
// reference with array itself
//! They are changing
const newFriends = friends;
newFriends[0] = "Asliddin";
console.log(friends);
*/







const person = {name: "john", job: "developer"};

// Do not do this, because they get reference ->
//const newPerson = person;

/*
const newPerson = {...person};
newPerson[name] = "Asliddin";
console.log(person);
*/


// You can add and change values to the object as well
const newPerson = {...person, city: "chicago", name: "Asliddin"};
console.log(newPerson);