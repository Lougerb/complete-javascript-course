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

*/

//Objects-----------------------------------------

const gerald ={
    firstName: "Louein",
    lastName:"Baling",
    age:24,
    job: "unemployed",
    friend1: "Jan",
    friend2: "Mar",
    friend3: "Feb"
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
gerald.location="Manila";
gerald["hangout"]="McDo"
console.log(`${gerald.firstName} has 3 friends called ${gerald["friend1"]}, ${gerald.friend2} and ${gerald["friend3"]}. They are hanging out in ${gerald.location} every Sunday.`);