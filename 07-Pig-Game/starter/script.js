"use strict";

let playerTurn = 0,
  p1CurrentScore = [],
  p2CurrentScore = [],
  p1TotalScore = document.getElementById("score--0"),
  p2TotalScore = document.getElementById("score--1");

const btnRoll = document.querySelector(".btn--roll"),
  btnHold = document.querySelector(".btn--hold"),
  bthNew = document.querySelector(".btn--new"),
  dicePic = document.querySelector(".dice"),
  player1BG = document.querySelector(".player--0"),
  player2BG = document.querySelector(".player--1"),
  displayp1CurrentScore = document.getElementById("current--0"),
  displayp2CurrentScore = document.getElementById("current--1");

//ATTEMPT 1 - function inside the switch
// switch (playerTurn) {
//   case 0:
//     btnRoll.addEventListener("click", function () {
//       //Display Dice
//       const diceNum = Math.trunc(Math.random() * 6 + 1);
//       dicePic.classList.remove("hidden");
//       dicePic.src = `dice-${diceNum}.png`;

//       //add current score
//       p1CurrentScore.push(diceNum);
//       //display total of current score
//       displayp1CurrentScore.textContent = p1CurrentScore.reduce((a, c) => {
//         return a + c;
//       }, 0);
//       if (diceNum === 1) {
//         playerTurn = 1;
//         displayp1CurrentScore.textContent = 0;
//         p1CurrentScore = [];
//         player1BG.classList.remove("player--active");
//         player2BG.classList.add("player--active");
//       }
//     });
//     break;

//   case 1:
//     btnRoll.addEventListener("click", function () {
//       //Display Dice
//       const diceNum = Math.trunc(Math.random() * 6 + 1);
//       dicePic.classList.remove("hidden");
//       dicePic.src = `dice-${diceNum}.png`;

//       //add current score
//       p2CurrentScore.push(diceNum);
//       //display total of current score
//       displayp2CurrentScore.textContent = p2CurrentScore.reduce((a, c) => {
//         return a + c;
//       }, 0);
//       if (diceNum === 1) {
//         playerTurn = 0;
//         displayp2CurrentScore.textContent = 0;
//         p2CurrentScore = [];
//         player2BG.classList.remove("player--active");
//         player1BG.classList.add("player--active");
//       }
//     });
//     break;
// }

// function diceResult() {
//   //Display Dice
//   const diceNum = Math.trunc(Math.random() * 6 + 1);
//   dicePic.classList.remove("hidden");
//   dicePic.src = `dice-${diceNum}.png`;
// }

//HOLD BUTTON ----------------------------------------------------------
/**
 * Bug:
 * BG wont switch
 * wont empty current
 *
 */
// btnHold.addEventListener("click", function () {
//   let sum1Total = Number(p1TotalScore.textContent),
//     sum2Total = Number(p2TotalScore.textContent);

//   switch (playerTurn) {
//     case 0:
//       sum1Total += Number(displayp1CurrentScore.textContent);
//       p1TotalScore.textContent = sum1Total;
//       playerTurn = 1;
//       break;

//     case 1:
//       sum2Total += Number(displayp2CurrentScore.textContent);
//       p2TotalScore.textContent = sum2Total;
//       playerTurn = 0;
//       break;
//   }
// });
////////////////////////////////////////////////////////////////////
//   if (playerTurn === 0) {
//     sum1Total += Number(displayp1CurrentScore.textContent);
//     p1TotalScore.textContent = sum1Total;
//     playerTurn = 1;
//   }

//   if (playerTurn === 1) {
//     sum2Total += Number(displayp2CurrentScore.textContent);
//     p2TotalScore.textContent = sum2Total;
//     playerTurn = 0;
//   }
// });

//ROLL BUTTON-----------------------------------------------------------
//Working Roll
// btnRoll.addEventListener("click", function () {
//   //Display Dice
//   const diceNum = Math.trunc(Math.random() * 6 + 1);
//   dicePic.classList.remove("hidden");
//   dicePic.src = `dice-${diceNum}.png`;

//   switch (playerTurn) {
//     case 0:
//       //add current score
//       p1CurrentScore.push(diceNum);
//       //display total of current score
//       displayp1CurrentScore.textContent = p1CurrentScore.reduce((a, c) => {
//         return a + c;
//       }, 0);

//       if (diceNum === 1) {
//         playerTurn = 1;
//         displayp1CurrentScore.textContent = 0;
//         p1CurrentScore = [];
//         player1BG.classList.remove("player--active");
//         player2BG.classList.add("player--active");
//       }

//       break;

//     case 1:
//       //add current score
//       p2CurrentScore.push(diceNum);
//       //display total of current score
//       displayp2CurrentScore.textContent = p2CurrentScore.reduce((a, c) => {
//         return a + c;
//       }, 0);

//       if (diceNum === 1) {
//         playerTurn = 0;
//         displayp2CurrentScore.textContent = 0;
//         p2CurrentScore = [];
//         player2BG.classList.remove("player--active");
//         player1BG.classList.add("player--active");
//       }

//       break;
//   }
// });
/////////////////////////////////////////////////////////////////////////////

// btnRoll.addEventListener("click", function () {
//   console.log(rollMeDice());
// });

// function rollMeDice() {
//   //Display Dice
//   let diceNum = Math.trunc(Math.random() * 6 + 1);
//   dicePic.classList.remove("hidden");
//   dicePic.src = `dice-${diceNum}.png`;
//   if (diceNum === 1 && playerTurn === 0) {
//     playerTurn = 1;
//   } else if (diceNum === 1 && playerTurn === 1) {
//     playerTurn = 0;
//   }
//   return diceNum;
// }

// switch (playerTurn) {
//   case 0:
//     //add current score
//     p1CurrentScore.push(diceNum);
//     //display total of current score
//     displayp1CurrentScore.textContent = p1CurrentScore.reduce((a, c) => {
//       return a + c;
//     }, 0);

//     if (diceNum === 1) {
//       displayp1CurrentScore.textContent = 0;
//       p1CurrentScore = [];
//       player1BG.classList.remove("player--active");
//       player2BG.classList.add("player--active");
//     }

//     break;

//   case 1:
//     //add current score
//     p2CurrentScore.push(diceNum);
//     //display total of current score
//     displayp2CurrentScore.textContent = p2CurrentScore.reduce((a, c) => {
//       return a + c;
//     }, 0);

//     if (diceNum === 1) {
//       playerTurn = 0;
//       displayp2CurrentScore.textContent = 0;
//       p2CurrentScore = [];
//       player2BG.classList.remove("player--active");
//       player1BG.classList.add("player--active");
//     }

//     break;
// }
//-----------------------------------------------

//WORKING FINAL

//FUNCTIONS

const btnDisable = function () {
  btnHold.disabled = true;
  btnRoll.disabled = true;
};
const switchToP1 = function () {
  player2BG.classList.remove("player--active");
  player1BG.classList.add("player--active");
};
const switchToP2 = function () {
  player1BG.classList.remove("player--active");
  player2BG.classList.add("player--active");
};

const clearCurrentScoreP1 = function () {
  displayp1CurrentScore.textContent = 0;
  p1CurrentScore = [];
};
const clearCurrentScoreP2 = function () {
  displayp2CurrentScore.textContent = 0;
  p2CurrentScore = [];
};

const turnNum = function () {
  //Display Dice
  const diceNum = Math.trunc(Math.random() * 6 + 1);
  dicePic.classList.remove("hidden");
  dicePic.src = `dice-${diceNum}.png`;

  switch (playerTurn) {
    case 0:
      //add current score
      p1CurrentScore.push(diceNum);
      //display total of current score
      displayp1CurrentScore.textContent = p1CurrentScore.reduce((a, c) => {
        return a + c;
      }, 0);

      if (diceNum === 1) {
        playerTurn = 1;
        clearCurrentScoreP1();
        // displayp1CurrentScore.textContent = 0;
        // p1CurrentScore = [];
        switchToP2();
        // player1BG.classList.remove("player--active");
        // player2BG.classList.add("player--active");
      }

      break;

    case 1:
      //add current score
      p2CurrentScore.push(diceNum);
      //display total of current score
      displayp2CurrentScore.textContent = p2CurrentScore.reduce((a, c) => {
        return a + c;
      }, 0);

      if (diceNum === 1) {
        playerTurn = 0;
        clearCurrentScoreP2();
        // displayp2CurrentScore.textContent = 0;
        // p2CurrentScore = [];
        switchToP1();
        // player2BG.classList.remove("player--active");
        // player1BG.classList.add("player--active");
      }

      break;
  }
};

const holdMe = function () {
  let sum1Total = Number(p1TotalScore.textContent),
    sum2Total = Number(p2TotalScore.textContent);

  switch (playerTurn) {
    case 0:
      sum1Total += Number(displayp1CurrentScore.textContent);
      p1TotalScore.textContent = sum1Total;

      if (Number(p1TotalScore.textContent) >= 100) {
        player1BG.classList.add("player--winner");
        clearCurrentScoreP1();
        btnDisable();
        // btnHold.disabled = true;
        // btnRoll.disabled = true;
      } else {
        //switch to player 2
        playerTurn = 1;

        clearCurrentScoreP1();
        // displayp1CurrentScore.textContent = 0;
        // p1CurrentScore = [];
        switchToP2();
        // player1BG.classList.remove("player--active");
        // player2BG.classList.add("player--active");
      }

      break;

    case 1:
      sum2Total += Number(displayp2CurrentScore.textContent);
      p2TotalScore.textContent = sum2Total;

      if (Number(p2TotalScore.textContent) >= 100) {
        player2BG.classList.add("player--winner");
        clearCurrentScoreP2();
        btnDisable();
        // btnHold.disabled = true;
        // btnRoll.disabled = true;
      } else {
        //switch to player 1
        playerTurn = 0;
        clearCurrentScoreP2();
        // displayp2CurrentScore.textContent = 0;
        // p2CurrentScore = [];
        switchToP1();
        // player2BG.classList.remove("player--active");
        // player1BG.classList.add("player--active");
      }
      break;
  }
};

btnHold.addEventListener("click", holdMe);

btnRoll.addEventListener("click", turnNum);

bthNew.addEventListener("click", function () {
  //reposition active to player 1
  playerTurn = 0;

  //clear Current score

  clearCurrentScoreP1();
  clearCurrentScoreP2();
  // displayp1CurrentScore.textContent = 0;
  // displayp2CurrentScore.textContent = 0;
  // p1CurrentScore = [];
  // p2CurrentScore = [];

  //active BG
  switchToP1();
  // player1BG.classList.add("player--active");
  // player2BG.classList.remove("player--active");
  player1BG.classList.remove("player--winner");
  player2BG.classList.remove("player--winner");
  //clear total score
  p1TotalScore.textContent = "0";
  p2TotalScore.textContent = "0";

  //enable btn Hold and Roll
  btnHold.disabled = false;
  btnRoll.disabled = false;
});

/* WORKING
const btnDisable = function () {
  btnHold.disabled = true;
  btnRoll.disabled = true;
};
const switchToP1 = function () {
  player2BG.classList.remove("player--active");
  player1BG.classList.add("player--active");
};
const switchToP2 = function () {
  player1BG.classList.remove("player--active");
  player2BG.classList.add("player--active");
};

const clearCurrentScoreP1 = function () {
  displayp1CurrentScore.textContent = 0;
  p1CurrentScore = [];
};
const clearCurrentScoreP2 = function () {
  displayp2CurrentScore.textContent = 0;
  p2CurrentScore = [];
};

const turnNum = function () {
  //Display Dice
  const diceNum = Math.trunc(Math.random() * 6 + 1);
  dicePic.classList.remove("hidden");
  dicePic.src = `dice-${diceNum}.png`;

  switch (playerTurn) {
    case 0:
      p1CurrentScore.push(diceNum);
      displayp1CurrentScore.textContent = p1CurrentScore.reduce((a, c) => {
        return a + c;
      }, 0);

      if (diceNum === 1) {
        playerTurn = 1;
        clearCurrentScoreP1();
        switchToP2();
      }

      break;

    case 1:
      p2CurrentScore.push(diceNum);
      displayp2CurrentScore.textContent = p2CurrentScore.reduce((a, c) => {
        return a + c;
      }, 0);

      if (diceNum === 1) {
        playerTurn = 0;
        clearCurrentScoreP2();
        switchToP1();
      }

      break;
  }
};

const holdMe = function () {
  let sum1Total = Number(p1TotalScore.textContent),
    sum2Total = Number(p2TotalScore.textContent);

  switch (playerTurn) {
    case 0:
      sum1Total += Number(displayp1CurrentScore.textContent);
      p1TotalScore.textContent = sum1Total;

      if (Number(p1TotalScore.textContent) >= 100) {
        player1BG.classList.add("player--winner");
        btnDisable();
      } else {
        playerTurn = 1;
        clearCurrentScoreP1();
        switchToP2();
      }

      break;

    case 1:
      sum2Total += Number(displayp2CurrentScore.textContent);
      p2TotalScore.textContent = sum2Total;

      if (Number(p2TotalScore.textContent) >= 100) {
        player2BG.classList.add("player--winner");
        btnDisable();
      } else {
        playerTurn = 0;
        clearCurrentScoreP2();
        switchToP1();
      }
      break;
  }
};

btnHold.addEventListener("click", holdMe);

btnRoll.addEventListener("click", turnNum);

bthNew.addEventListener("click", function () {
  playerTurn = 0;
  clearCurrentScoreP1();
  clearCurrentScoreP2();
  switchToP1();
  player1BG.classList.remove("player--winner");
  player2BG.classList.remove("player--winner");
  p1TotalScore.textContent = "0";
  p2TotalScore.textContent = "0";
  btnHold.disabled = false;
  btnRoll.disabled = false;
});
*/
