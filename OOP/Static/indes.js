// static = keyword that defines properties and methods that belong to the class itself rather than the objects created from that class; class owns anything static, not the objects;


class User {
  static userCount = 0;

  constructor(userName) {
    this.userName = userName;
    // In the constructor, you can write some additional code, like console.log.

    // Do not use this here! It will conflict with the object. Explicitly say the property belongs to the class itself!
    User.userCount++;
  }

  sayHello() {console.log(`Hello, I am ${this.userName}`)};

  static getUserCount() {
    console.log(`There are ${User.userCount} users online!`)
  }
}

const user1 = new User("Dark Heart")
const user2 = new User("Asal")
const user3 = new User("Asila")

user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(User.userCount)

User.getUserCount()



















/* 
class MathUtil {
  static PI = 3.14459;

  static getDiameter(radius) {
    return radius * 2;
  }

  // even static properties are accessed with the this keyword
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}


console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


// const mathUtil1 = new MathUtil();

// console.log(mathUtil1.PI); // undefined
// console.log(MathUtil.PI); */