/*
//Basic Operators Assignment-------------------------------------

//1
let myContryPop = 1000000;
let myHalfContryPop = myContryPop/2;
console.log(myHalfContryPop);

//2
myContryPop++;
console.log(myContryPop);

//3
const finlandPop=6000000;
console.log(finlandPop < myContryPop);

//4
const avePopCont = 33000000;
console.log(avePopCont>myContryPop);

//5

let country="Malaysia", continent="Asia", countryPopulation=11000000, countryLanguage="Malay";
let description = country + " is in " + continent + ", and its " + countryPopulation + " people speaks " + countryLanguage;
console.log(description);


//Assignment----------------------------------------------------

const markMass=78, markHeight=1.69;
const johnMass=92, johnHeight=1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log("Mark's BMI is "+markBMI);
console.log("John's BMI is "+johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John? "+markHigherBMI);


//Combining Strings and Values-----------------------------------
//Most use for ES6!

const myName="Louein";
const myAge=24;
const myPlace="Makati";

//Pain in the butt
const myIntro1="My Name is "+myName+", I am "+myAge+" and I live in "+myPlace+".";
console.log(myIntro1);

//Easy to code, ALWAYS USE THIS
//use ${} and ` Key for string
// " ` " this is backtick, found upper of Tab Key
const myIntro2=`My Name is ${myName}, I am ${myAge} and I live in ${myPlace}`;
console.log(myIntro2);

//Math

const mySampleMath = 1+3;
console.log(`I am ${mySampleMath} years old, next year I will be ${2+3} years old`);

//Assignment
//Revise the past assignment
const markMass=78, markHeight=1.69;
const johnMass=92, johnHeight=1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log(`Mark's BMI is ${markBMI}`);
console.log(`John's BMI is ${johnBMI}`);

const markHigherBMI = markBMI > johnBMI;
console.log(`Is Mark's BMI higher than John? ${markHigherBMI}`);


//if else---------------------------------------------------------

const myCountryPop=11;
const theirCountry="Portugal";
const avePop=22;

if(myCountryPop>33){
    console.log(`${theirCountry}'s population is above average`);
}
else{
    console.log(`${theirCountry}'s population is ${33-myCountryPop} million below Average`);
}


//Assignment

const markMass = 78, markHeight = 1.69;
const johnMass = 92, johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark has the highest BMI of ${markBMI} than John's BMI of ${johnBMI}`);
}
else {
    console.log(`John has the highest BMI of ${johnBMI} than Mark's BMI of ${markBMI}`);
}

//A=wl

const hisWrec = 16, hisHrec = 10;
const herWrec = 10, herHrec = 19;

const hisArec = hisWrec * hisHrec;
const herArec = herWrec * herHrec;

if (hisArec >= herArec) {
    console.log(`His area ${hisArec} is larger than her area ${herArec}.`);
}
else {
    console.log(`Her area ${herArec} is larger than his ${hisArec}`);
}

//else if

const age = 18;
if (age == 18) {
    console.log("You are legal NOW!");
}
else if (18 > age) {
    console.log("You are not legal yet")
}
else if (18 < age) {
    console.log("You are already an Adult");
}



// what does === do?---------------------------------
// this condition will only express if with the same type of value
//for example String to String, Number to Number


//string
let myNameG = "gerald";

if (myNameG === "gerald") {
    console.log(`His name is ${myNameG}`);
}
else {
    console.log(`His name is no ${myNameG}`);
}

//number
let age = 19;

if (age === 19) {
    console.log(`He is ${age} years old`);
}

//if being compared with different Value, like String to number, it will give a False result

let year = "2001"; //Value is string
if (year === 2001) {  //compared to a Number
    console.log(`Today is ${year}`); //this will only show if compared to Number to number OR String to string
}
//result will not appear if not compared correctly
//else, make an else statement.
else {
    console.log(`Give me a number`);
}
*/
//To fix this, try converting a string to number

let date = "23";
date = Number(date);

if (date === 23) {
    console.log(`Today's date is ${date}`);
}
//this else statement is optional
else {
    console.log(`Give me a number`);
}


