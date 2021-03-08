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



//Boolean/Logical operators----------------------------------------------
// using && || !

// && -if all condition are true, the result will be true
// but if one or all condition is false, the result will be false

// || - if all condition are false, the result will be false
// but if one or all condition are true, the result will be true

// ! - using this will make condition the opposite

const hasDriverLicense = true;
const hasGoodVision = true;
const noHealthProblem = false;
const noMoney = false;

    // console.log(hasDriverLicense && hasGoodVision);
    // console.log(hasDriverLicense && noHealthProblem);
    // console.log (hasDriverLicense || hasGoodVision);
    // console.log (noHealthProblem || noMoney);
    // console.log(!noHealthProblem);

if((hasDriverLicense&&hasGoodVision) && noHealthProblem){
    console.log(`You can drive now!`);
}


else{
    console.log(`Take care of your health first!`);
}


//MyOwn Assignment
//Job Skill requirement
const skillHTML=true,
skillCSS=true,
skillJS=false,
skillReactJS=true,
skillSASS=true,
skillPHP=true,
skillMySQL=true;

if(skillHTML&&skillCSS&&skillJS&&skillReactJS&&skillSASS&&skillPHP&&skillMySQL){
    console.log(`You are hired!`);
}
else if(skillJS===false){
    console.log(`Hired, but study JS`);
}


const language="english",
pop=50,
island=false;

if ( (language==="english") && (pop<=50) && (!island) ){
    console.log(`Sara can live this country!`);
}
else{
    console.log(`Sara can't live here`);
}



//Assignment
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

//My Challenge is also to specifically tell if One of the team's score
//got the highest or lowest than 100 points
// MY BEST CHALLENGE SO FAR

const aveDolphinScore=100;
const aveKoalaScrore=100;


if( aveDolphinScore<100 && aveKoalaScrore <100 ){

    if(aveDolphinScore > aveKoalaScrore){
        console.log(`Both scores lower than 100, but Dolphin HIGHER!`);
    }

    else if (aveKoalaScrore > aveDolphinScore){
        console.log(`Both scores lower than 100, but Koala is HIGHER!`);
    }

    else{
        console.log(`Both draw and scores lower than 100, LOSERS!`);
    }
}

else if( aveDolphinScore >= 100 && aveKoalaScrore >= 100 ){

    if( aveDolphinScore > aveKoalaScrore ){
            console.log(`Dolphin wins!`);
    }
    else if( aveDolphinScore < aveKoalaScrore ){
        console.log(`Koala wins!`);
    }
    else {
        console.log(`Both Draw, both higher than 100, BOTH WON!`);
    }
}

else if( aveDolphinScore >= 100 && aveKoalaScrore < 100){
    console.log(`Dolphin wins! and Koala has a score lower than 100`);
}

else if ( aveDolphinScore < 100 && aveKoalaScrore >=100){
    console.log(`Koala wins! and Dolphin has a score lower than 100`);
}

*/

const day="saturday";

if (day==="monday"){
    console.log('Plan course structure');
    console.log(`Go to coding meetup`);
}
else if (day==="tuesday"){
    console.log(`Prepare theory videos`);
}
else if (day==="wednesday"||day==="thursday"){

    console.log(`Write code examples`);
}

else if (day==="friday"){
    console.log(`Record Videos`);
}
else if (day==="saturday"||day==="sunday"){
    console.log(`Pahinga tayo`);
}
else{
    console.log(`enter a valid day`);
}