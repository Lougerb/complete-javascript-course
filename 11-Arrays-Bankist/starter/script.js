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

// currencies.forEach(function (fe_value, fe_key, fe_Map) {
//   console.log(`${fe_value}, ${fe_key}, ${ fe_Map}`);
// });

//Coding Challenge
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. 
So each of them asked 5 dog owners about their dog's age,
and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy 
if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually 
have cats, not dogs! So create a shallow copy of Julia's array, 
and remove the cat ages from that copied array 
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy 
("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* 
const julia_Vet = {
    vetName: "Julia",
    animalAge: [3, 5, 2, 12, 7],
    animalAge2: [9, 16, 6, 8, 3],
  },
  kate_Vet = {
    vetName: "Kate",
    animalAge: [4, 1, 15, 8, 3],
    animalAge2: [10, 5, 6, 1, 4],
  };

const checkanimalAge = function (vet) {
  const getAllAge = [...vet.animalAge, ...vet.animalAge2];

  let vetDogArr = (vet.dogAge = []);
  let vetCatArr = (vet.catAge = []);

  getAllAge.forEach(function (pAge) {
    if (pAge < 13) {
      vetDogArr.push(pAge);
    } else {
      vetCatArr.push(pAge);
    }
  });

  vetDogArr.forEach(function (dAge, dIndex) {
    const dog_Stage = function () {
      const isOld = dAge >= 3 ? `an Adult` : `still a Puppy 🐶`;
      return isOld;
    };
    console.log(
      `Dog number ${dIndex + 1} is ${dog_Stage()}, and is ${dAge} years old`
    );
  });
};

checkanimalAge(julia_Vet);
console.log(`-----`);
checkanimalAge(kate_Vet);
console.log(`-----`);
*/
