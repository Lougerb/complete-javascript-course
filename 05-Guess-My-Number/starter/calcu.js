"use strict";

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

document.getElementById("idbtnDivide").onclick = function storeMe() {
  a = Number(document.querySelector(".numBox").value);
  selectOP = 3;
};

document.getElementById("idbtnMulti").onclick = function storeMe() {
  a = Number(document.querySelector(".numBox").value);
  selectOP = 4;
};

//EQUAL BUTTON
document.querySelector(".btnEqual").addEventListener("click", equal);

function equal() {
  if (selectOP === 1) {
    x = Number(document.querySelector(".numBox").value);
    console.log(a + x);
    document.querySelector(".numBox").value = a + x;
  }

  if (selectOP === 2) {
    x = Number(document.querySelector(".numBox").value);
    console.log(a - x);
    document.querySelector(".numBox").value = a - x;
  }

  if (selectOP === 3) {
    x = Number(document.querySelector(".numBox").value);
    console.log(a / x);
    document.querySelector(".numBox").value = a / x;
  }

  if (selectOP === 4) {
    x = Number(document.querySelector(".numBox").value);
    console.log(a * x);
    document.querySelector(".numBox").value = a * x;
  }
}
