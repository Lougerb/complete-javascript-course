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

class Car {
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

// const carModel = "Ford",
//   carSpeed = 20,
//   carSpeedUnit = "km/h";

// const carInfo = new Car("Bench", 10, "km/h");
// const carInfo = new Car(carModel, carSpeed, carSpeedUnit);

// let getCar = "";

// const carInfo = function (carModel, carSpeed, carSpeedUnit) {
//   const getCar = new Car(carModel, carSpeed, carSpeedUnit);
// };

/* const carModel = "Ford",
  carSpeed = 99,
  carSpeedUnit = "km/h";

const getCar = new Car(carModel, carSpeed, carSpeedUnit);

// Will show property
console.log(getCar);
console.log(getCar.speedUS);
console.log(getCar);
getCar.speedUS = getCar.speedUS;
getCar.speedUS = 10;

getCar.accelerating();

getCar.speedUS;

getCar.accelerating();

getCar.speedUS;
getCar.speedUS = getCar.speedUS;
getCar.accelerating();
getCar.accelerating();
getCar.speedUS;
getCar.accelerating();
 */

// Parent Class
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2039 - this.birthYear;
};

// Child Class
const Student = function (firstName, birthYear, course) {
  /* Instead of writting:
    this.firstName=firstName;
    this.birthYear=birthYear;
    Write this: */
  // This is a way to call class function
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// To access calcAge from person
// Link Student class to person class
// Must be write after Child class Function
Student.prototype = Object.create(Person.prototype);

const mike = new Student("Mike Wazowski", 1990, "ComSci");
const jun = new Person("Jun Amaki", 1998);

console.log(mike);

console.log(mike.calcAge());

const Evehicle = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

const jeep = new Evehicle("Jeep", 120, 99);
console.log(jeep);
const fx = new Car("Tamaraw", 99, "km/h");

console.log(fx);
// ERROR HERE
// make a new Car class using function
// class Car wont work
