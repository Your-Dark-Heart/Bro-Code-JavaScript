

fetch("./people.json") // Returns a promise
  .then(response => response.json()) // Also returns a promise
  .then(people => people.forEach(person => {
      console.log(person.name);
  }))
  .catch(error => console.error(error));





/* 
async function fetchData() {
  try {
    const response = await fetch("./person.json");
    
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    

    const result = await response.json();
    console.log(result);

  }
  catch(error) {
    console.error("Failed to fetch data:", error);
  }
}

fetchData();
*/


/*
// JSON.stringify() = converts a JS object to a JSON string;
// JSON.parse() = converts a JSON string to a JS object

const names = ["Dark Heart", "Asila", "Alisa", "Asliddin"];
const person = { "name": "Dark Heart", "age": 18, "isSingle": true, "hobbies": ["Coding", "Listening to music"] };
const people = [{ "name": "Dark Heart", "age": 18, "isSingle": true }, { "name": "Alisa", "age": 22, "isSingle": true }, { "name": "Asliddin", "age": 18, "isSingle": true }, { "name": "Asila", "age": 22, "isSingle": true }];

const jsonNamesString = JSON.stringify(names);
const jsonPersonString = JSON.stringify(person);
const jsonPeopleString = JSON.stringify(people);


const jsonNames = JSON.parse(jsonNamesString);
const jsonPerson = JSON.parse(jsonPersonString);
const jsonPeople = JSON.parse(jsonPeopleString);

console.log(jsonPeople);
*/


