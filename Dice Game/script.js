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

// Re-assign variables with no values to start from.
let scores, currentScore, activePlayer, playing;

// This initialization is written for reset the game at the end.
const init = function () {
  // Initializa the final score in an array for both players
  scores = [0, 0];

  // Initialize the current score before the rolling dice function
  currentScore = 0;

  // Set player to be active
  activePlayer = 0;

  // The State of game playing (true or false)
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

// // Initializa the final score in an array for both players
// const scores = [0, 0];

// // Initialize the current score before the rolling dice function
// let currentScore = 0;

// // Set player to be active
// let activePlayer = 0;

// // The State of game playing (true or false)
// let playing = true;
//
//
//
// Switch Player functionality
const switchPlayer = function () {
  // reset the score to 0 point
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // toggle the .player--active to switch the background color
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//
//
//
// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
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
      // // reset the score to 0 point
      // currentScore = 0;
      // document.getElementById(`current--${activePlayer}`).textContent = 0;

      // // switch to next player
      // activePlayer = activePlayer === 0 ? 1 : 0;
      switchPlayer();

      // // toggle the .player--active to switch the background color
      // player0El.classList.toggle("player--active");
      // player1El.classList.toggle("player--active");
    }
  }
});
//
//
//
// Holding the score functionality
btnHold.addEventListener("click", function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    //   console.log(scores[activePlayer]);

    //   scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});
//
//
//
// Reset the game
btnNew.addEventListener("click", init);
