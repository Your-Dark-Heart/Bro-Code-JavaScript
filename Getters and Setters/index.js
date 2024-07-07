// getter  = special method that makes a property readable
// setter = special method that makes a property writable

// validate and modify a value when reading/writing a property




class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName) {
      this._firstName = newFirstName;
    }
    else {
      console.error("Invalid first name!")
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName) {
      this._lastName = newLastName;
    }
    else {
      console.error("Invalid last name!")
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    }
    else {
      console.error("Invalid age!")
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  // It is a property!!!
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

}


const person = new Person("Dark", "Heart", 18)



console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName); // It is a property, not a function
console.log(person.age);









/* 
class Rectangle {
  constructor(width, height) {

    // .width and .heigh are here setters. They are validating the user input.
    this.width = width;
    this.height = height;
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    }
    else {
      console.error("Invalid height!");
    }
  }

  get height() {
    return `${this._height.toFixed(1)} cm` ;
  }


  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    }
    else {
      console.error("Invalid width!");
    }
  }

  get width() {
    return `${this._width.toFixed(1)} cm^2`;
  }


  // We  can also use getters without setters to make a function a property;
  get area() {
    return `${(this._width * this._height).toFixed(1)} cm`;
  }
}

const rectangle = new Rectangle(100, 5);



// Here too, the setters are validating
rectangle.width = -1000;
rectangle.height = "pizza"


console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area); */