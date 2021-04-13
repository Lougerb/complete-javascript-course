"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/**
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//ARRAY METHODS----------------------------------

//Valurables to use
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let arr2 = ['q', 'w', 'e', 'r', 't', 'y'];

//SLICE METHOD
//doesnt mutate the array but only give the result value

console.log(arr.slice(2));
//output: ["c", "d", "e", "f"]

//negative number will get the last n of array
console.log(arr.slice(-2));
//output: ["e", "f"]

//syntax .slice(start, end)
console.log(arr.slice(1, 3));
//output: ["b", "c"]

//SPLICE METHOD
//Will MUTEATE the original array
// will actually delete/separate arrays from the original array

console.log(arr.splice(2));
//output: ["c", "d", "e", "f"]
console.log(arr);
//output:  ["a", "b"]

//REVERSE METHOD
//this method MUTATE the original array EVEN you store it on a variable

// console.log(arr2.reverse());
// output: ["y", "t", "r", "e", "w", "q"]
// console.log(arr2);
// output: ["y", "t", "r", "e", "w", "q"]

//CONCAT METHOD
//Will merge 2 arrays
//DOESN'T MUTATE ORIGINAL ARRAY

const arr3 = ['1', '2', '3', '4', '5'];
const arr4 = ['6', '7', '8', '9', '10'];

const mergeArray = arr3.concat(arr4);
console.log(mergeArray);

//same method with "..." array
console.log([...arr3, ...arr4]);

//JOIN METHOD
//Will Join array with a string between them
//will convert array to string
const joinArr = mergeArray.join('-');
console.log(joinArr);
//Output: 1-2-3-4-5-6-7-8-9-10
 */

//For-Each Loop----------------------------------------------------------
/*
const myMovements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

//Typical for-of loop
for (const [i, transaction] of myMovements.entries()) {
  // if(transaction >0){console.log(`${transaction}`);}
  transaction > 0
    ? console.log(`Transaction ${i + 1}: You deposit ${transaction}`)
    : console.log(`Transaction ${i + 1}: You withdraw ${transaction}`);
}

//for-each loop method
//function syntax for ForEach

element.forEach( function( newVarElement, index, array){ 
  dosomething  
})

myMovements.forEach(function (fe_element, fe_index, fe_array) {
  fe_element > 0
    ? console.log(`You deposit ${fe_element}`)
    : console.log(`You withdraw ${fe_element}`);
});
*/

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (fe_value, fe_key, fe_Map) {
  console.log(`${fe_value}, ${fe_key}, ${fe_Map}`);
});
