function combineStrings(...strings) {
  return strings.join(" ")
}




const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");


console.log(fullName);




/* 
function getAverage(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }

  return total / numbers.length;
} */


/* 
function sum(...numbers) {
   let result = 0;
   for (let number of numbers) {
    result += number
   }

   return result;
}

const total = sum(1, 2, 100, 584, 954);
console.log(`Your total is $${total}.`); */


/*  
 const food1 = "pizza";
 const food2 = "hamburger";
 const food3 = "hotdog";
 const food4 = "sushi";

 function openFridge(...foods) {
  console.log(foods);
 }

function getFood(...foods) {
  return foods;
}


openFridge(food1, food2, food3, food4);

console.log(getFood(food1, food2, food3, food4)); */