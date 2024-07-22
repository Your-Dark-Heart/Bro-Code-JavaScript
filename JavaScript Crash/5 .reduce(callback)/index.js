// REDUCE => 
//         reduces an array to a single value - number, array, object
//         array.reduce((accumulator, current value) => {}, initial)



/*
const staff = [
  {name: "bob", age: 20, position: "developer", salary: 25000},
  {name: "peter", age: 25, position: "designer", salary: 20000},
  {name: "susy", age: 20, position: "manager", salary: 30000},
  {name: "anna", age: 35, position: "intern", salary: 5000},
];


const monthlyTotal = staff.reduce((total, person) => {

  return total + person.salary;

}, 0); 


console.log(monthlyTotal);

*/





/* 
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1
  },
  {
    title: "Google Pixel",
    price: 499.99,
    amount: 2
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3
  }
];


let {totalItems, cartTotal} = cart.reduce((total, cartItem) => {
  const {amount, price} = cartItem;
  // Count items
  total.totalItems += amount;
  // Count sum
  total.cartTotal += amount * price;
  return total;
}, {
  totalItems: 0,
  cartTotal: 0
});

cartTotal = Number(cartTotal.toFixed(2));

console.log(totalItems, cartTotal);

*/





const url = "https://api.github.com/users/john-smilga/repos?per_page=100";


const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  const newData = data.reduce((total, repo) => {
    const {language} = repo;
    
    // if (language) {
    //   if (total[language]) {
    //     total[language] += 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }

    if (language) {
      total[language] = total[language] + 1 || 1;
    }


    return total;
  }, {});

  console.log(newData);
};

fetchRepos();




