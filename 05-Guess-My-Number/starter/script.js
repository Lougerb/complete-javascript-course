"use strict";
/*
//changing text of the element's content
document.querySelector(".message").textContent = "YOU ARE CORRECT!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value;
*/

let randomNum = 15;
let score = 20;
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
  }
  if (getInput > randomNum) {
    document.querySelector(".message").textContent = "too HIGH!";
    document.querySelector(".score").textContent = score -= 1;

    document.querySelector("body").style.backgroundColor = "red";
  }
  if (getInput < randomNum) {
    document.querySelector(".message").textContent = "too LOW!";
    document.querySelector(".score").textContent = score -= 1;
    document.querySelector("body").style.backgroundColor = "yellow";
    document.querySelector(".number").style.color = "black";
    document.querySelector("main").style.color = "black";
    document.querySelector("header").style.color = "black";
    document.querySelector(".guess").style.color = "black";
  }
  console.log(getInput);
});
