"use strict";
/*
//simple function

function logger() {
    console.log("My Name is Louein");
}

//calling or running or invoking a function
logger();


function fruitProcessor(numApples, numOranges) {
    console.log(numApples, numOranges);
    const juice = `I have ${numApples} apples and ${numOranges} oranges`;
    return juice;
}

fruitProcessor(4, 3); //this will execute the console.log(numApples, numOranges);

//if you want to get the result from juice, store it in a variable

const appleJuice = fruitProcessor(3, 2);
console.log(appleJuice);
// or you can directly do this
console.log(fruitProcessor(3, 8));

//Simple Math----------------
function myAgeNow(birthYear, todaysYear){
    const calMyAge = `My age this year ${todaysYear} is ${todaysYear-birthYear}.`;
    return calMyAge;
}

const introAge=myAgeNow(1997, 2021);
console.log(introAge);


//function as expression---------

const myAgeNow2 = function(birthYear, todaysYear){
    const calMyAge = `My age this year ${todaysYear} is ${todaysYear-birthYear}.`;
    return calMyAge;
}

const introAge2 = myAgeNow2(1996, 2021);
console.log(introAge2);



//function calling a function


function cutTheFruit(myFruit){
    return myFruit * 4;
}


function fruitProcessor(apples, oranges){

const cutApple=cutTheFruit(apples);
const cutOrange=cutTheFruit(oranges);

    const juice = `Juice with ${cutApple} pieces of apple and ${cutOrange} pieces of oranges.`
    return juice;
}

console.log(fruitProcessor(3, 4) );
//------------------------------------------

//assignment - function
//create a funtion that will get country's name and number of population

function percentageOfWorld1(worldPop){

    return (worldPop/7900)*100;

}

function describePopulation(country, population){
    const countryPercent = percentageOfWorld1(population)

    return `${country} has ${population} million people, which is about ${countryPercent}% of the world`;
}

console.log(describePopulation("Singapore", 1441));



function ageCal(giveYear){

    return 2021-giveYear;
}

function yearRetireCal(giveAge){

    const theirAge=ageCal(giveAge);

    if(theirAge>65){
        return theirAge;
    }
    else if(theirAge===0){
        return theirAge;
    }

    else if(theirAge===65){ //OKAY for already retired
        return theirAge;
    }

    else if( 0<theirAge && theirAge<65 ){ //OKAY for less than 65

        return 65-theirAge;
    }

    else if(theirAge<=0){ //OKAY FOR negative result

        return theirAge;
    }

}

function yearsUntilRetirement(birthYear, firstName){

    const retirementCal = yearRetireCal(birthYear);


        if(retirementCal<=0){ 
            return `You haven't born yet`
        }
        else if(retirementCal>65){
            return `You are already retired since ${retirementCal-65} year/s ago`;
        }
        else if(retirementCal===65){
            return `Congrats, you are retired this year!`;
        }
        else if(retirementCal<65 && 0<retirementCal){
            return `${firstName} has ${retirementCal} years before retirement`;
        }
}

console.log(yearsUntilRetirement(2022, "Gerald") );



//Special condition
//Team won only if DOUBLE the score of the opponent team


function calcAverage(score1, score2, score3){

    return (score1+score2+score3)/3;

}

function checkWinner(avgDolphins, avgKoalas){

    const doubleSDolphins = 2 * avgDolphins;
    const doubleSKoalas = 2 * avgKoalas;

    if( avgDolphins>=doubleSKoalas){

        return `Dolphins win ( ${avgDolphins} vs. ${avgKoalas})`
    }

    else if( doubleSDolphins<=avgKoalas){
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    }

    else{
        return `Lose!`;
    }

}
const scoreDolphins = calcAverage(5, 255, 5);
const scoreKoalas = calcAverage(10, 10, 10);

console.log(checkWinner(scoreDolphins, scoreKoalas));


//Array================================

const friends= ["John","Mike","Henry"]; // hidden value inside the brackets is always starts with zero
console.log(friends); //will result for length and array

console.log(friends[1]); //if we want to show/output one of the array's value

friends.push("Joy");//Method if we want to add a value at the end of the array
console.log(friends);// result if we use push

console.log(friends.length); // .length is when we want to know how much length does the array have

friends.unshift("Pan"); // Method if we want to add a value in the beginning of the array
console.log(friends);

friends.pop(); //Method if we want to remove the last element of the array
console.log(friends);

friends.shift(); //method if we want to remove the first element of the array
console.log(friends);

console.log(friends.indexOf("Mike")); //.indextOf to get the # of the array

//.includes is a type of boolean where it will check if an element is in the array
console.log(friends.includes("Mike"));
console.log(friends.includes("Bob"));



if (friends.includes("Henry")){
    console.log(`You have a friend called ${friends[2]}`);
}
else{
    console.log(`You dont have a friend like that`);
}



function calTip(theirBill){
    if(theirBill<=300 && theirBill>=50){

        return theirBill*0.15;
    }

    else{
        return theirBill*0.2;
    }

}

function myBillTip(b1, b2 ,b3){  

    const totalTip=[calTip(b1),calTip(b2),calTip(b3)];
    
    const totalBillTip=[b1+totalTip[0], b2+totalTip[1], b3+totalTip[2]];

    
    return `Here's the tips ${totalTip} and the total bill and tips ${totalBillTip}`;

}

const bill=[125, 555, 44];

console.log(myBillTip(bill[0],bill[1],bill[2]));



//Objects-----------------------------------------

const gerald ={
    firstName: "Louein",
    lastName:"Baling",
    age:24,
    job: "unemployed",
    friend1: "Jan",
    friend2: "Mar",
    friend3: "Feb",

    calcBYear: function(){ //can also do function
        console.log(this);
        return 2021-this.age;
    }
};

//retrieving data from objects

// using dot notation
console.log(gerald.lastName); //PROPERTY ONLY
//using bracket notation
console.log(gerald["lastName"]); //can put expression

// const knowMe = prompt(`Pick: firstName, lastName, age or job`);

// if(gerald[knowMe]){
//     console.log( gerald[knowMe] ); //if User pick from the properties
// }
// else{
//  console.log(`You dont want to know me`); //if User not pick from the properties
// }
//can also add some properties on the object
gerald.location="Manila";
gerald["hangout"]="McDo"
console.log(`${gerald.firstName} has 3 friends called ${gerald["friend1"]}, ${gerald.friend2} and ${gerald["friend3"]}. They are hanging out in ${gerald.location} every Sunday.`);


const gerald ={
    firstName: "Louein",
    lastName:"Baling",
    age:24,
    job: "unemployed",
    friend1: "Jan",
    friend2: "Mar",
    friend3: "Feb",

    calcBYear: function(){ //can also do function
        
        console.log(this); //"this" is calling the whole array

        return 2021-this.age;
    }
};

console.log(gerald.calcBYear()); //will call the function from the object's property

//Assignment
//Create your own method with array and function

const lougerInfo = {

    fName: "Gerald",
    lName: "Dela Cruz",
    bYear: 1997,
    bPlace: "Makati",
    schools: ["PCS","Mapua","Udemy"],
    hasJob: true,
    job: "Front End Developer",

    calcAge: function(){  //this is Object Method

        this.age = 2021-this.bYear;  // "this" can only use if INSIDE the object's method, s
        return this.age;            // so you cannot use the object's name ex. instead of lougerInfo, use "this"

    },

    getsummary: function(){

        const myAge=this.calcAge();

        return `${this.fName} is ${this.calcAge()} years old born in ${this.bPlace}, studied in ${this.schools.length} schools ${this.schools[0]}, ${this.schools[1]}, and ${this.schools[2]}. He ${this.hasJob===true ? "has" : "don't have"} a job.`;

    }
};

console.log(lougerInfo.getsummary());


// console.log(lougerInfo.calcAge()); 
//to get ,age result, you have to call function first .calcAge
// console.log(lougerInfo.age);


// console.log(`${lougerInfo.fName} is ${lougerInfo.age} years old born in ${lougerInfo.bPlace}, studied in ${lougerInfo.schools.length} schools ${lougerInfo.schools[0]}, ${lougerInfo.schools[1]}, and ${lougerInfo.schools[2]}. He ${lougerInfo.hasJob===true ? "has" : "don't have"} a job.`);



    // ternary operator
    // Syntax

    // condition ? exprIfTrue : exprIfFalse

    // example:

    // const temparature="Hot";


    // if(temperature === "Hot") {
    //     console.log(`I sweat`);
    // }
    // else{
    //     console.log(`I get cold`);
    // }

    // Using Ternary Operator

    // const tempDesc = (temperature === "Hot") ? "I sweat" : "I get cold";

    // console.log(tempDesc);




const markP = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        
        return this.mass/(this.height**2);

    }
};

const johnP = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        
        return this.mass/(this.height**2);

    }
}

const winner = (markP.calcBMI()>johnP.calcBMI()) ? `${markP.fullName} has the higher BMI of ${markP.calcBMI()} than ${johnP.fullName}'s BMI of ${johnP.calcBMI()}`:`${johnP.fullName} has the higher BMI of ${johnP.calcBMI()} than ${markP.fullName}'s BMI of ${markP.calcBMI()}`
console.log(winner);



//TAKE 2-----------------------------------------------

const markBMI={
    wName: "Markiplier",
    mass: 78,
    height: 1.69,
    
    calcBMI: function (){
        this.hisBMI = this.mass/(this.height**2);
        return this.hisBMI;
    }
};

const johnBMI={
    wName: "Johnsepticeye",
    mass: 92,
    height: 1.95,
    
    calcBMI: function (){
        this.hisBMI = this.mass/(this.height**2);
        return this.hisBMI;
    }
};

// you NEED to call the calcBMI Function FIRST to able to call .hisBMI on the next line

console.log(`Final result:`)
console.log(`${markBMI.wName}'s BMI is ${markBMI.calcBMI()}`)
console.log(`${johnBMI.wName}'s BMI is ${johnBMI.calcBMI()}`)


if (markBMI.hisBMI > johnBMI.hisBMI){
    console.log(`${markBMI.wName} has the highes BMI of ${markBMI.hisBMI} than ${johnBMI.wName}'s BMI of ${johnBMI.hisBMI}`);
}

else if (johnBMI.hisBMI > markBMI.hisBMI){
    console.log(`${johnBMI.wName} has the highest BMI of ${johnBMI.hisBMI} than ${markBMI.wName}'s BMI of ${markBMI.hisBMI}`)
}

else {
    console.log(`Both ${markBMI.wName} and ${johnBMI.wName} has the same BMI result of ${markBMI.hisBMI}`);
}


//FOR LOOP----------------------------------------

//simple example

//rep=1 - means it will start the count of 1
//rep<=10 - is a boolean, it will stop print if it got equal to 10
//rep++ - the value of rep will increase by 1
//rep++ - is also short for rep=rep+1


// for (let rep=1 ; rep <=10; rep++){
//     console.log(`Repitition of ${rep}`);
// }



const gerald =[
    "Louein",
    "Baling",
    24,
    1997,
    "Front End developer",
    ["PCS", "Mapua", "Udemy"]

];

const newArray = []; //empty array for Filling array

// for (let i=0 ; i < gerald.length; i++){

//     console.log(gerald[i]);

//     //Filling an array
//     newArray[i]=typeof gerald[i];

// }
//console.log(newArray); //will get a value from 'for loop''s filling

//challenge
//calculate the age from array using loops

const bYear=[ 1957, 1997, 1989, 1999];
const bAge=[];

for (let i=0 ; i < bYear.length ; i++){

    //bAge[i]=2021-bYear[i];
    bAge.push(2021-bYear[i]);

}

//console.log(bAge);

*/

//new Challenge
//calculate the total tips from the bill using array
//if bill is less than 300 and over 50, their tip is 15%
//else, their tip is 20%

// const myBill=[20, 150, 301]
// const totalBilTips=[];
// const theirTips=[];

// for (let i=0 ; i<myBill.length ; i++){

//     const theirTip15=myBill[i]*0.15;
//     const theirTips20=myBill[i]*0.2;

//     if(myBill[i]<300 && myBill[i]>50){

//         theirTips.push(theirTip15);
//         totalBilTips.push(myBill[i]+theirTip15);

//     }

//     else{
//         theirTips.push(theirTips20);
//         totalBilTips.push(myBill[i]+theirTips20);
//     }

// }
// console.log(theirTips);
// console.log(totalBilTips);

/** 
//continue and break


console.log(`-----STRING ONLY-----`)
for( let i=0 ; i<gerald.length ; i++){

    //this expression is for picking a STRING ONLY
    //if type of gerald[i] is not a string then continue
    
    if (typeof gerald[i] !== "string") continue;

    //this will skip everything but string

    console.log(gerald[i]);
}

console.log(`-----BREAK ON NUMBER-----`)

for( let i=0 ; i<gerald.length ; i++){

    //this expression is when a loop detect a number or certain condition, it will stop there
    //if typeof gerald[i] is equal to number, then break
    
    if (typeof gerald[i] === "number") break;

    //loop will stop when a number is found and it will not output the number

    console.log(gerald[i]);
}

//looping backwards

const gerald =[
    "Louein",
    "Baling",
    24,
    1997,
    "Front End developer",
    ["PCS", "Mapua", "Udemy"]

];

    //always .length-1
    //i increament will be --

for (let i=gerald.length-1 ; i>=0 ; i-- ){

    console.log(gerald[i]);
}

//loop within a loop

// for (let exercise = 1; exercise<=4; exercise++){
//     console.log(`---Exercise number ${exercise}---`);

//     for(let rep=1 ; rep<=10; rep++){
//         console.log(`Huff ${rep}`);
//     }
// }

//triangle
// for(let i = 1; i<=6; i++){

//     for(let j = 1; j<=i; j++){
//         console.log("*")
//     }
//     console.log(" ");
// }




//LOOP CHALLENGE!
//finding a specific value

const findThis="Front End developer";

// for(let i=0 ; i<gerald.length ; i++ ){

//     let result=gerald[i];

//     if (result !== findThis){
        
//         console.log(`Can't find ${findThis}`);
        
//     }

//     else {
        
//         console.log(`we found! ${findThis}`);
        
        
//     }

//}

//While Loop-----------------------------

let rep=1;
while(rep<=10){
    console.log(`Lifting rep ${rep}`)
    rep++;
}



const myBill=[20, 150, 301]
const totalBilTips=[];
const theirTips=[];

function calTip(b){
    if (b<300 && 50<b)
    {
        return b*0.15;
    }
    else{
        return b*0.2;
    }
}

function calcToltalBT(bt){

    return bt+calTip(bt);

}


for (let i=0 ; i<myBill.length ; i++){

    theirTips.push(calTip(myBill[i]));
    totalBilTips.push(calcToltalBT(myBill[i]));
    
}




function calcAvgOT(arr){

let sum=0;

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }

    return sum/arr.length;
}

console.log(myBill);
console.log(theirTips);
console.log(totalBilTips);
console.log(calcAvgOT(totalBilTips));
*/

/*
const gerald =[
    "Louein",
    "Baling",
    24,
    1997,
    "Front End developer",
    ["PCS", "Mapua", "Udemy"],
    88

];


for (let i = 0; i < gerald.length; i++) {
  //this expression is for picking a STRING ONLY
  //if type of gerald[i] is not a string then continue

  if (typeof gerald[i] !== "number" && typeof gerald[i] !== "object") continue;

  //this will skip everything but string

  console.log(gerald[i]);
}
* */
