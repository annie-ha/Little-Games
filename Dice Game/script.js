"use strict";

// Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Initializa the final score in an array for both players
const scores = [0, 0];

// Initialize the current score before the rolling dice function
let currentScore = 0;
let activePlayer = 0;

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2. Display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // current0El.textContent = currentScore;
  } else {
    // reset the score to 0 point
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;

    // toggle the class player--active to switch the background color
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
