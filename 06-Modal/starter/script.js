"use strict";

//Selecltor to variable
//we'll use this to how and exit Modals
// const modalMul = document.querySelector(".modalMul"),
//   modalEach = document.querySelectorAll(".modal"),
//   showModal = document.querySelectorAll(".show-modal"),
//   closeModal = document.querySelector(".close-modal"),
//   closeModalALL = document.querySelectorAll(".close-modalA"),
//   overlay = document.querySelector(".overlay");
//Make 3 modal buttons functional
//will result the same output

// for (let i = 0; i < showModal.length; i++) {
//   showModal[i].addEventListener("click", function () {
//     //this will remove the "hidden" class in <div class="modal midden">
//     //when removing or adding, dont include "."
//     modalMul.classList.remove("hidden");
//     //You may also do this, but it will take a longer code
//     //document.querySelector(".hidden").style.display = "block";

//     //with overlay
//     overlay.classList.remove("hidden");
//   });
// }
/** 
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", function () {
    //this will remove the "hidden" class in <div class="modal midden">
    //when removing or adding, dont include "."
    modalEach[i].classList.remove("hidden");
    //You may also do this, but it will take a longer code
    //document.querySelector(".hidden").style.display = "block";
    //with overlay
    overlay.classList.remove("hidden");
  });
}

// //For closing modal
// closeModal.addEventListener("click", function () {
//   //will add and trigger hidden selector
//   overlay.classList.add("hidden");
//   modalMul.classList.add("hidden");

//   //   modalEach[1].classList.add("hidden");
//   //   modalEach[2].classList.add("hidden");
// });

for (let i = 0; i < modalEach.length; i++) {
  closeModalALL[i].addEventListener("click", function () {
    modalEach[i].classList.add("hidden");
    overlay.classList.add("hidden");
  });
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 0; i < showModal.length; i++) {

//   showModal[i].addEventListener("click", function () {
//     modalEach[i].classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });

// }

// for (let i = 0; i < modalEach.length; i++) {

//   closeModalALL[i].addEventListener("click", function () {
//     modalEach[i].classList.add("hidden");
//     overlay.classList.add("hidden");
//   });

// }

////////////////////////////////////////////

const modalMul = document.querySelector(".modalMul"),
  modalEach = document.querySelectorAll(".modal"),
  showModal = document.querySelectorAll(".show-modal"),
  closeModal = document.querySelector(".close-modal"),
  closeModalALL = document.querySelectorAll(".close-modalA"),
  overlay = document.querySelector(".overlay");

for (let i = 0; i < showModal.length; i++) {
  const showMeModal = function () {
    modalEach[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
  const closeMeModal = function () {
    modalEach[i].classList.add("hidden");
    overlay.classList.add("hidden");
  };

  showModal[i].addEventListener("click", showMeModal);

  closeModalALL[i].addEventListener("click", closeMeModal);

  //Close modal using Escape Key
  document.addEventListener("keydown", function (event) {
    const keyName = event.key;
    if (keyName === "Escape") {
      closeMeModal();
    }
  });
}
