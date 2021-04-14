"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#194350";
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
});

document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);

  //WHEN INVALID INPUT ENTERED:
  if (!guessedNumber || guessedNumber < 1 || guessedNumber > 20) {
    displayMessage("Please enter a number btw 1-20.");
  }

  //WHEN CORRECT NUMBER ENTERED:
  else if (guessedNumber === secretNumber) {
    displayMessage("Correct 😄😄");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#81b214";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //WHEN WRONG NUMBER ENTERED:
  else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessedNumber > secretNumber
          ? "Higher than number 👎👎"
          : "Lower than number 👍👍"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("GAME OVER 😥😥");
      document.querySelector(".score").textContent = 0;
    }
  }
});
