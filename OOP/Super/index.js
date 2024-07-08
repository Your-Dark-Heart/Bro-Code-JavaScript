// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent


class Animal {

  hey = "hello!";


  static hello() {
    console.log("hello!")
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} moves at the speed of ${speed} mph.`)
  }
}


class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run!`);

    // You can call a method from the parent class in the child's function with super to continue some action.

    super.move(this.runSpeed);
  }
}


class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim!`);

    super.move(this.swimSpeed);

  }
}


class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }


  fly() {
    console.log(`This ${this.name} can fly!`);

    super.move(this.flySpeed);

  }
}



const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);


//rabbit.move(12);

rabbit.run();




// Statics are also inherited with extends!
// Fish.hello()

