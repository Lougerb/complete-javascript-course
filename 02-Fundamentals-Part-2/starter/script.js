"use strict";

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