"use strict";

// document.querySelector(".message").textContent = "Correct Answer!";
// document.querySelector(".guess").value;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".number").textContent = secretNumber;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Refactoring code
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    // When there is a win
    displayMessage("Correct Number! You Win!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Set Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // When guess is wrong
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      score--;
      document.querySelector(".score").textContent = score;
    }
    //   } else if (guess < secretNumber) {
    //     // When guess is too low
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too Low!";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "You Lost!";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     }
  }
});

// Reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  //   document.querySelector(".highscore").textContent = "0";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
