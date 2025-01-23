"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Adding keypress Event "Esc"

document.addEventListener("keydown", function (e) {
  console.log(e.key); // key is the information from the DOM window
  if (e.key === "Escape") {
    // Escape is the value of the key as shown in the DOM window
    if (!modal.classList.contains("hidden")) {
      // Before close the modal by pressing ESC, check to see if the modal does not contain the "hidden" class.
      // if it does not has the "hidden" class, call the closeModal function to add the "hidden" class.
      closeModal();
    }
  }
});

// Refactoring code
// if (e.key === "Escape" && !modal.classList.contains("hidden")
// {
// closeModal();
// };
