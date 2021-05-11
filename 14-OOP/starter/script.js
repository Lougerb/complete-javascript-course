"use strict";

/* const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const gerald = new Person("Gerald", 1997);
console.log(gerald);

const liz = new Person("Liezyl", 1995);
const lizette = new Person("Lizette", 2030);
console.log(liz, lizette);

// Using Prototype
// functions syntax for prototypes
Person.prototype.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  return 2037 - this.birthYear;
};

console.log(Person.prototype);

// calling function for object
gerald.calcAge();
liz.calcAge();
lizette.calcAge();

console.log(gerald.calcAge());

Person.prototype.species = "Homo Sapiens";
console.log(gerald.species, liz.species);
// output: Homo Sapiens, Homo Sapiens
// species will not store inside Person property
// instead, it will store under __proto__
console.log(gerald.__proto__.species);
//same syntax with gerald.species

//checking if person has a property "firstName"
console.log(gerald.hasOwnProperty("firstName"));

// Codding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Car go accelerate
Car.prototype.accelerate = function () {
  console.log(`${this.make} goes ${this.speed + 10}`);
};
Car.prototype.brake = function () {
  console.log(`${this.make} stopped at ${this.speed - 5}`);
};
const car1 = new Car("BMW", 120);
console.log(car1);

car1.accelerate();
car1.brake();
 */

// Class
/* 
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //   Writting a method
  //   Better way
  calcAge() {
    console.log(2039 - this.birthYear);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);

jessica.calcAge(); //output 43

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Methods

  // Accelerating
  accelerating() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  // Deccelerating
  deccelerate() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }
}

const merc = new Car("merc", 120);
console.log(merc);
merc.accelerating();
merc.accelerating();
merc.accelerating();
merc.accelerating();
merc.deccelerate();
merc.accelerating();

 */

// Static Methods

// Array.frrom method
// Syntax Array.from(arr);
// Example

// const sampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(Array.from(sampleArr));
// output (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* class Car {
  constructor(make, speed, unit) {
    this.make = make;
    this.speed = speed;
    this.unit = unit;
  }

  get speedUS() {
    if (this.unit == "mi/h") {
      console.log(`This speed is already in mi/h`);
      return this.speed;
    } else {
      this.unit = "mi/h";
      this.speed = this.speed / 1.6;
      console.log(
        `${this.make}'s speed is converted to ${this.speed} ${this.unit}`
      );
      return this.speed;
    }
  }

  set speedUS(mi) {
    if (this.unit == "mi/h") {
      this.unit = "km/h";
      this.speed = mi * 1.6;
      console.log(`${this.speed} ${this.unit}`);
    } else if (this.speed !== mi) {
      this.speed = mi;
      console.log(`${this.make}'s new speed is ${this.speed}`);
    } else {
      console.log(`This car is already a km/h`);
    }
  }

  // Accelerating
  accelerating() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} ${this.unit}`);
  }

  // Deccelerating
  deccelerate() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} ${this.unit}`);
  }
}

const bench = new Car("Bench", 10, "km/h");

// Will show property
console.log(bench);
console.log(bench.speedUS);
console.log(bench);
bench.speedUS = bench.speedUS;
bench.speedUS = 10;

bench.accelerating();
bench.accelerating();
bench.accelerating();
bench.accelerating();

bench.speedUS;

bench.accelerating();
bench.accelerating();
bench.accelerating();
bench.accelerating();

bench.speedUS;
bench.speedUS = bench.speedUS;
bench.accelerating();
bench.accelerating();
bench.accelerating();
bench.accelerating();
bench.speedUS;
bench.accelerating();
bench.accelerating();
bench.accelerating(); */
