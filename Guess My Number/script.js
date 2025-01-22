"use strict";

// document.querySelector(".message").textContent = "Correct Answer!";
// document.querySelector(".guess").value;
document.querySelector(".score").textContent = 10;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  }
});
