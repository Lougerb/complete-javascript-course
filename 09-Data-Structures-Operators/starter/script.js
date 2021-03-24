'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  restoName: 'Classico Italiano',
  restoLoc: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //Formats for function inside
  //function({}){}
  orderDelivery: function ({ time, address }) {
    console.log(`Magdeliver ako mga ${time} sa ${address}`);
    // console.log(time, address);
  },
};

//calling properties individually instead of using "object.property"
let { restoName, restoLoc, mainMenu } = restaurant;
// console.log(restoLoc, restoName, mainMenu);

//renaming property names
const {
  restoName: myResto,
  restoLoc: restoPlace,
  mainMenu: restoMenu,
} = restaurant;

//testign of renaming
// console.log(myResto);
// console.log(restoPlace);
// console.log(restoMenu);

//mutating variables
let a = 100;
let b = 3000;

const obj = { a: 23, b: 30, c: 200 };

//always use parentheses
({ a, b } = obj);

// console.log(a, b);

//calling an object within the object

//calling the value of Open and Close
const {
  openingHours: {
    thu: { open, close },
  },
} = restaurant;
// console.log(open, close);

//calling the value of opening Hours
const { openingHours } = restaurant;
// console.log(openingHours);

//calling the value of Thu, fri and sat
const {
  openingHours: { thu, fri, sat },
} = restaurant;
// console.log(fri, thu, sat);

//renaming object within an object after calliing

//friday's Open and Clse
const {
  openingHours: {
    fri: { open: isOpen, close: isClose },
  },
} = restaurant;

// console.log(isOpen, isClose);

// console.log(restaurant);

//giving a function value
//format
//Object.property({value objects});
restaurant.orderDelivery({
  time: '22:30',
  address: 'Makati City',
});

// console.log(restaurant.orderDelivery);

//Spread operator

//manual method
const myArray = [4, 5, 6];
const newArray = [1, 2, 3, myArray[0], myArray[1], myArray[2]];
// console.log(newArray);

//using Spread Operator
//will result the same as newArray
const spreadArray = [1, 2, 3, ...myArray];
// console.log(spreadArray);

//joining 2 arrays
const firstArray = ['uno', 'dos', 'tres'];
const secondArray = ['apat', 'lima', 'anim'];
const joinArray = [...firstArray, ...secondArray];
// console.log(joinArray);

//copy Array
//we copy joinArray

const iCopyArray = [...joinArray];
// console.log(iCopyArray);

//get Starter and Main Menu combined

const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(allMenu);

//make it more complicated
//by renaming
const { starterMenu: firstMenu } = restaurant;
const { mainMenu: lastMenu } = restaurant;
const compAllMenu = [...firstMenu, ...lastMenu];
console.log(compAllMenu);

//letters of String to array
const str = 'louein';
const stringArray = [...str];
console.log(stringArray);
