class Animal {
  // It means each instance will have alive property
  alive = true;


  // It means each instance will have eat property
  eat() {
    console.log(`This ${this.name} is eating!`)
  }

  sleep() {
    console.log(`This ${this.name} is sleeping!`)
  }
}


class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`This ${this.name} is running!`)
  }
}

class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`This ${this.name} is swimming!`)
  }
}

class Hawk extends Animal {
  name = "hawk";

  fly() {
    console.log(`This ${this.name} is flying!`)
  }
}


const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();


rabbit.alive = false;
console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();


rabbit.run();
hawk.fly();
fish.swim();