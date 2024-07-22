const menu = [
  {
    name: "pancakes",
    category: "breakfast"
  },
  {
    name: "burger",
    category: "lunch"
  },
  {
    name: "steak",
    category: "dinner"
  },
  {
    name: "bacon",
    category: "breakfast"
  },
  {
    name: "eggs",
    category: "breakfast"
  },
  {
    name: "pasta",
    category: "dinner"
  }
];


const categories = menu.map((item) => item.category);
const categoriesOrderedSet = new Set(categories);
const categoriesOrderedList = ["midnight", ...categoriesOrderedSet];


const result = document.querySelector("#result");

result.innerHTML = categoriesOrderedList.map(category => {
  return `<button>${category}</button>`;
}).join(" ");