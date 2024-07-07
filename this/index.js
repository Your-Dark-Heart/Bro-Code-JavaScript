

// Arrow functions do not change the value of this. in these functions, this refers to the outer scope value of this. In our case, the outer value is undefined, for this is refering to the window object!

const person = {
  name: "Asliddin",
  sayHello: () => console.log(`I am ${this.name}`)
}


person.sayHello();








//console.log(this)


/* 
const firstName = "Dark Heart!"


const person1 = {
  firstName: "Spongebob",
  favoriteFood: "hamburgers",
  sayHello() {
    console.log(`Hi, I am ${this.firstName}`);
  },
  eat() {
    console.log(`${this.firstName} is eating ${this.favoriteFood}`);
  }
};


const person2 = {
  firstName: "Patrick",
  favoriteFood: "pizza",
  sayHello() {
    console.log(`Hi, I am ${this.firstName}`);
  },
  eat() {
    console.log(`${this.firstName} is eating ${this.favoriteFood}`);
  }
};

person1.eat();
person2.eat(); */