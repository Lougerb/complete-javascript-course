"use strict";
/*

Some practice lesson
//changing text of the element's content
document.querySelector(".message").textContent = "YOU ARE CORRECT!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value;
*/

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = Number((document.querySelector(".score").textContent = 20));
let hScore = 0;

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let displayScore = function (scoreF) {
  document.querySelector(".score").textContent = scoreF;
};

let displayHScore = function (hScoreF) {
  document.querySelector(".highscore").textContent = hScoreF;
};

let changeBodyColor = function (bgColor) {
  document.querySelector("body").style.backgroundColor = bgColor;
};
//Button Check

document.querySelector(".check").addEventListener("click", function btnClick() {
  const getInput = Number(document.querySelector(".guess").value);

  //If user is correct
  if (getInput === randomNum) {
    displayMessage("WIN WIN WIN");
    displayScore((score += 1));
    changeBodyColor("green");

    // if (hScore < score) {
    //   let hScore = score;
    //   document.querySelector(".highscore").textContent = hScore;
    // }

    //short for score
    displayHScore(hScore < score ? (hScore = score) : hScore);

    //small delay to change random Number after winning
    setTimeout(function () {
      randomNum = Math.trunc(Math.random() * 20) + 1;
    }, 500);
  }

  // if user is wrong
  if (getInput !== randomNum) {
    displayScore((score -= 1));
    displayMessage(getInput > randomNum ? "too HIGH!" : "too LOW!");
    // document.querySelector(".message").textContent = getInput > randomNum ? "too HIGH!" : "too LOW!";
    if (score === 0) {
      displayMessage("You LOSE!");
      // document.querySelector(".message").textContent = "You LOSE!";
      document.querySelector(".check").textContent = "Press Again";
      document.querySelector(".check").disabled = true;
    }
    changeBodyColor("#222");
  }
  //if input is HIGHER!
  // if (getInput > randomNum) {
  //   document.querySelector(".message").textContent = "too HIGH!";
  //   document.querySelector("body").style.backgroundColor = "red";
  // }

  //if Input is LOWER!
  // if (getInput < randomNum) {
  //   document.querySelector(".message").textContent = "too LOW!";
  //   document.querySelector("body").style.backgroundColor = "yellow";
  // }
});

document
  .querySelector(".again")
  .addEventListener("click", function againClick() {
    //will generate a new random number between 1-20
    randomNum = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");

    //resets score to 20
    displayScore("20");
    score = Number(displayScore(20));

    //resets high scrore to 0
    displayHScore("0");
    hScore = 0;

    //resets the style and content of some of the classes to default
    changeBodyColor("#222");

    // changeStyleColorWHITE("main");
    // changeStyleColorWHITE("header");
    // changeStyleColorWHITE(".guess");

    // document.querySelector("main").style.color = "#eee";
    // document.querySelector("header").style.color = "#eee";
    // document.querySelector(".guess").style.color = "#eee";

    document.querySelector(".guess").value = "";
    document.querySelector(".check").textContent = "Check!";
    document.querySelector(".check").disabled = false;
  });
