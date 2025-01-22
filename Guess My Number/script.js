"use strict";

// document.querySelector(".message").textContent = "Correct Answer!";
// document.querySelector(".guess").value;
// document.querySelector(".score").textContent = 10;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    // When there is a win
    document.querySelector(".message").textContent = "Correct Number! You Win!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    // When guess is too high
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNumber) {
    // When guess is too low
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

// Reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  //   document.querySelector(".highscore").textContent = "0";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
