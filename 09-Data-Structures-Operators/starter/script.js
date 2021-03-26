"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  restoName: "Classico Italiano",
  restoLoc: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
    // console.log(`Magdeliver ako mga ${time} sa ${address}`);
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
  time: "22:30",
  address: "Makati City",
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
const firstArray = ["uno", "dos", "tres"];
const secondArray = ["apat", "lima", "anim"];
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
// console.log(compAllMenu);

//letters of String to array
const str = "louein";
const stringArray = [...str];
// console.log(stringArray);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmud",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewan",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewan", "Gnarby", "Lewan", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  // printGoals: function (t1_numOfPlayer, t2_numOfPlayer) {
  //   const t1numofplayer = t1_numOfPlayer.length;
  //   const t2numofplayer = t2_numOfPlayer.length;
  //   const t1NumOfGoal = this.odds.team1 * t1numofplayer;
  //   const t2NumOfGoal = this.odds.team2 * t2numofplayer;

  //   console.log(`Team 1 Number of players: ${t1numofplayer}`);
  //   console.log(`Team 2 Number of players: ${t2numofplayer}`);
  //   console.log(`Team 1 Number of Goals: ${t1NumOfGoal}`);
  //   console.log(`Team 2 Number of Goals: ${t2NumOfGoal}`);
  //   t1NumOfGoal < t2NumOfGoal
  //     ? console.log(`Team 1 wins!`)
  //     : console.log(`Team 2 Wins!`);
  // },
};

// #1 - #3 task

const {
  players: [player1 = [], player2 = []],
} = game;

// console.log(`Team 1 Players: ${player1}`);
// console.log(`Team 2 Players: ${player2}`);

const allPlayers = [...player1, ...player2];

// console.log(`All players from both teams: ${allPlayers}`);

//get  Goal keeper - assuming the first player

const [t1_goalKeeper, ...t1_outFields] = [...player1];
const [t2_goalKeeper, ...t2_outFields] = [...player2];

// console.log(
//   `Team 1 Goal Keeper: ${t1_goalKeeper} and Team 2 Goal Keeper: ${t2_goalKeeper}`
// );

// console.log(`Team 1 Outfields: ${t1_outFields}`);
// console.log(`Team 2 Outfields: ${t2_outFields}`);

//#4 --- Subtitute players
const player1newSub = ["Thiago", "Coutinho", "Persic"];
const player1Final = [...player1, ...player1newSub];
// console.log(`Team 1 added more players ${player1newSub}`);
// console.log(`Total players in team 1: ${player1Final.length}`);
// console.log(`Total players in team 2: ${player2.length}`);

////=========================
const myOwnMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(myOwnMenu);

//OLD SCHOOL JAVASCRIPT FOR LOOP
for (let i = 0; i < myOwnMenu.length; i++) {
  // console.log(myOwnMenu[i]);
}

//Using Modern Javascript

//format
// for(var Name of arrayName){expression}

for (const myElements of myOwnMenu) {
  // console.log(myElements);
}
////=========================
////Using with Index
////Use deconstruction expression []

// for([var Name] of arrayName.entries() ){expression}

for (const [itemNum, myNewElements] of myOwnMenu.entries()) {
  // console.log(itemNum, myNewElements);
  //to make it look nice
  // console.log(`${itemNum + 1}: ${myNewElements}`);
}

///////CHALLENGE #2

// #1

for (let [playerNum, playerScored] of game.scored.entries()) {
  // console.log(`Goal ${playerNum + 1}: ${playerScored}`);
}

// #2
//get the value from odds

let aveOdds = 0;

//dont need brackets if calculating in for-of Loop
//dont need ; at the end of for-of loop
const valuesOfOdds = Object.values(game.odds);

for (let myOdds of valuesOfOdds) aveOdds += myOdds;
aveOdds /= Object.keys(game.odds).length;

// console.log(aveOdds);

//#3
for (let [teamOdds, valueOdds] of Object.entries(game.odds)) {
  //we use game[teamOdds] instead of using the dot notation
  //using game.teamOdds will give us "Unidentify"
  //so use [] instaed for accessing the value of team1 and team2
  const stringOdds =
    teamOdds === "x" ? `draw:` : `victory of Team ${game[teamOdds]}`;

  // console.log(`Odds of ${stringOdds} ${valueOdds}`);

  // console.log(teamOdds, valueOdds);
}

// console.log(game.team1);

// const scorers = {
//   players: {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewan: 2,
//   },
// };

// console.log(scorers);
const scorers = {};

for (let x of game.scored) {
  //scorers[x] is the same with scores.game.scored
  //scorers[x]++ is scorers[x] incrimenting
  //will return who's equal to 1
  //then if everything's counted, will count the rest and sum it
  scorers[x]++ || (scorers[x] = 1);
}

// console.log(scorers);

//Output:
// scorers = {
// Gnarby: 1,
// Hummels: 1,
// Lewan: 2
// }

//SETS
//example of sets
const myFoods = new Set([
  "Chicharon",
  "Kwek-kwek",
  "pisbol",
  "Chicharon",
  "pisbol",
  "manok",
]);

// Set will remove duplucates
// you cannot get values from set

// console.log(myFoods);

//you can put set on array
const myNewFoods = ["cheese", "apple", "apple", "orange", "popcorn", "cheese"];
//it will remove duplicate inside the array
//but it will stay as an ARRAY
//can also get values
const myNewFoods_RemoveDups = [...new Set(myNewFoods)];
// console.log(myNewFoods_RemoveDups);
// console.log(myNewFoods_RemoveDups[1]);

//array will convert to SET
const myNewFoodsUnique = new Set([...myNewFoods]);
// console.log(myNewFoodsUnique);
//if we want to know the actual number of food by categories
//use .size
// console.log(myFoods.size);

//MAPS

const rest = new Map();

rest.set("myRestoName", "MyBongo");
// console.log(rest);

//can be replace
rest.set("myRestoName", "MyResto");
// console.log(rest);
//If added more, it will update rest Map
rest.set("Location", "Makati");
rest.set("Open", 11);
rest.set("Close", 24);
// console.log(rest);

// .get will get the value of the Map's KEY
//if key is not inside the map, then it will return UNDEFINED
// console.log(rest.get("myRestoName"));

//check if there's a key
// console.log(rest.has("categories")); //it will return false

//Deleting a Key
// rest.delete("Location");
// console.log(rest);

//Wipe all Map's keys
// rest.clear();
// console.log(rest);

//get size of Map
// console.log(rest.size);

//Array as Key for Map
//DO NOT USE ACTUAL ARRAY AS KEY
//Instead, store it on variable then take the variable as the key
const sampArr = [1, 2, 3];
rest.set(sampArr, "This key is Array");
// console.log(rest);

//converting object to map
// console.log(Object.entries(openingHours)); //Sample Object
const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

const quiz = new Map([
  ["question", "Best Language to learn?"],
  [1, "C"],
  [2, "Java"],
  [3, "JS"],
  ["correct", 3],
  [true, "Correct ka jan!"],
  [false, "Mali ka"],
]);
// console.log(quiz);

// const answerKo = Number(prompt("YourAnswer?"));
// console.log(answerKo);
//check if true or false
// console.log(quiz.get(quiz.get("correct")) === answerKo);

//converting Map to Array

const map2Arr = [...quiz];
// console.log(map2Arr);

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const listOfEvents = new Set([]);

for (let [minute, myEvent] of gameEvents) {
  //#1 create an array of an event without dups
  listOfEvents.add(myEvent);

  //#2 if yellow card detected, it will delete its key assigned
  //but total game is 90 minutes
  if (minute < 90 && myEvent === "🔶 Yellow card") {
    gameEvents.delete(minute);
  }

  // #3
  // for (let i = 1; i <= 10; i++) {
  //   const minOfGame = i * 9;
  //   if (minOfGame > minute) console.log(`somthing happen on ${minOfGame}`);

  // }
}
console.log(listOfEvents);

// for (let [minute, myEvent] of gameEvents) console.log(minute);

// #2

console.log(gameEvents);
