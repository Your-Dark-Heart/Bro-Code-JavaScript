// Order, unlike array destructuring, is not important
// What ever you are looking for, it has to be in the onject as a key, unlike array destructuring


/*
const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane"
  },
  arrays: [
    ["hello", "bye", "fuck you"],
    ["hola", "bye", "aaaa"],
    ["helab", "bahfe", "lhsdb"],
  ]
};


const last = "asalcbalcablb";

// You can rename with a colon
const {
  last: fuckYou, 
  first, 
  city, 
  zip,
  siblings: {sister: favouriteSibling},
  arrays: [firstArray]
} = bob;


console.log(fuckYou);
console.log(last);
console.log(favouriteSibling);
console.log(firstArray);

*/



const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane"
  }
};


function printPerson({first, last, city, siblings: {sister}}) {
  //const {first, last} = person;
  console.log(first, last, sister);
}

printPerson(bob);