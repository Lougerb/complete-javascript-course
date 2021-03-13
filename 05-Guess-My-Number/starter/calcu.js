"use strict";

// let a = 0;
/** 
document
  .querySelector(".btnPlus")
  .addEventListener("click", function calPlus() {
    //convert's entered value to number
    let b = Number(document.querySelector(".numBox").value);

    //get and store b's number then add to 0
    a += b;
    return (document.querySelector(".numBox").value = a);
  });
  

document
  .querySelector(".btnMinus")
  .addEventListener("click", function calMinus() {
    //convert's entered value to number
    let b = Number(document.querySelector(".numBox").value);

    //get and store b's number then add to 0
    a -= b;
    return (document.querySelector(".numBox").value = a);
  });
*/

// document
//   .querySelector(".btnEqual")
//   .addEventListener("click", function calEqual() {
//     //convert's entered value to number
//     let b = Number(document.querySelector(".numBox").value);

//     //get and store b's number then add to 0
//     a += b;
//     return (document.querySelector(".numBox").value = a);
//   });

// function plusBtn() {
//   // let x = 0;
//   let a = Number(document.querySelector(".numBox").value);
//   x = a;
// }

// if (document.getElementById("idbtnPlus").clicked == true) {
//   x = a;
//   selectOP = 1;
// }

//selectOP is for OPERATION identifier
let selectOP = 0;

//"a" will be the first number
let a = 0;

//"x" will be the second number
let x = 0;

//PLUS OPERATION
document.getElementById("idbtnPlus").onclick = function storeMe() {
  a = Number(document.querySelector(".numBox").value);
  selectOP = 1;
};

document.getElementById("idbtnMinus").onclick = function storeMe() {
  a = Number(document.querySelector(".numBox").value);
  selectOP = 2;
};

//EQUAL BUTTON
document.querySelector(".btnEqual").addEventListener("click", equal);

function equal() {
  if (selectOP === 1) {
    x = Number(document.querySelector(".numBox").value);
    console.log(x + a);
    document.querySelector(".numBox").value = x + a;
  }

  if (selectOP === 2) {
    x = Number(document.querySelector(".numBox").value);
    console.log(x - a);
    document.querySelector(".numBox").value = x - a;
  }
}
