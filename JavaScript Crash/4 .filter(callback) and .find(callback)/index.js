const people = [
  {name: "bob", age: 20, position: "developer"},
  {name: "peter", age: 25, position: "designer"},
  {name: "john", age: 20, position: "developer"},
  {name: "robert", age: 20, position: "developer"},
  {name: "susy", age: 30, position: "manager"},
  {name: "anna", age: 35, position: "intern"},
  {name: "anvar", age: 20, position: "developer"},
];

// Filter -> 
//          returns a new array (even if it is empty) returns under condition



const youngPeople = people.filter((person) => {
  //return true;
  return person.age < 30;
});
console.log(youngPeople);






const developers = people.filter((person) => person.position === "developer");
console.log(developers);







const seniorDevelopers = people.filter((person) => person.position === "senior developer");
console.log(seniorDevelopers);
// If you return nothing, there will be an empty array;
// But in map, there are bunch of undefined's in the new array







// FIND -> 
//        returns a single value


const peter = people.find((person) => person.name === "peter");
console.log(peter);




// if no match - undefined
const oldPerson = people.find((person) => person.age > 40);
console.log(oldPerson);



// return first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);