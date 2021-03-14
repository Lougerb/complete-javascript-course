"use strict";
/*
//changing text of the element's content
document.querySelector(".message").textContent = "YOU ARE CORRECT!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value;
*/

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = Number((document.querySelector(".score").textContent = 20));
let hScore = 0;

// function btnClick(userInput) {
//   let score = 20;
//   let hScore = 0;
//   if (userInput === randomNum) {
//     document.querySelector(".message").textContent = "WIN WIN WIN";
//     document.querySelector(".score").textContent = score += 1;
//     if (hScore >= score) {
//       hScore = score;
//       document.querySelector(".highscore").textContent = hScore;
//     }
//   } else if (userInput >= randomNum) {
//     document.querySelector(".message").textContent = "too HIGH!";
//     document.querySelector(".score").textContent = score -= 1;
//   } else if (userInput <= randomNum) {
//     document.querySelector(".message").textContent = "too LOW!";
//     document.querySelector(".score").textContent = score -= 1;
//   }
// }

document.querySelector(".check").addEventListener("click", function btnClick() {
  const getInput = Number(document.querySelector(".guess").value);

  if (getInput === randomNum) {
    document.querySelector(".message").textContent = "WIN WIN WIN";
    document.querySelector(".score").textContent = score += 1;
    document.querySelector("body").style.backgroundColor = "green";

    if (hScore < score) {
      let hScore = score;
      document.querySelector(".highscore").textContent = hScore;
    }

    setTimeout(function () {
      randomNum = Math.trunc(Math.random() * 20) + 1;
    }, 500);
  }

  //if input is HIGHER!
  if (getInput > randomNum) {
    document.querySelector(".message").textContent = "too HIGH!";
    document.querySelector(".score").textContent = score -= 1;

    document.querySelector("body").style.backgroundColor = "red";
  }

  //if Input is LOWER!
  if (getInput < randomNum) {
    document.querySelector(".message").textContent = "too LOW!";
    document.querySelector(".score").textContent = score -= 1;
    document.querySelector("body").style.backgroundColor = "yellow";
    document.querySelector(".number").style.color = "black";
    document.querySelector("main").style.color = "black";
    document.querySelector("header").style.color = "black";
    document.querySelector(".guess").style.color = "black";
  }
});

document
  .querySelector(".again")
  .addEventListener("click", function againClick() {
    randomNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = "20";
    document.querySelector(".highscore").textContent = "0";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("main").style.color = "#eee";
    document.querySelector("header").style.color = "#eee";
    document.querySelector(".guess").style.color = "#eee";
    document.querySelector(".guess").value = "";
  });
