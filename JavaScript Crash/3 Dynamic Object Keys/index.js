/*
const person = {
  name: "John"
};


console.log(person.name);
person.age = 25;
console.log(person);



const items = {
  "featured-items": ["item 1", "item 2"]
}

console.log(items["featured-items"]);
console.log(person["name"]);
*/



/*
// If you want to put a variable as a key in an object, use [];
let appState = "loading";
appState = "error";

const keyName = "computer";

const app = {
  [appState]: true
}

app[keyName] = "apple";

console.log(app);
*/



const state = {
  loading: true,
  name: "",
  job: ""
}

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "John");
updateState("job", "developer");
updateState("loading", false);


updateState("products", ["apple", "oil"]);
updateState("name", "Asliddin");


console.log(state);



