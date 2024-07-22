// MAP =>
//      returns a new array

const people = [
  {
    name: "Bob",
    age: 20,
    position: "developer"
  },
  {
    name: "Anna",
    age: 25,
    position: "designer"
  },
  {
    name: "Sussy",
    age: 30,
    position: "Manager"
  }
];


const ages = people.map((person, index) => person.age * 2);

const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20
  }
});

