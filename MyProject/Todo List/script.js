"use strict";

let getTitle = document.querySelector(".createTitle");
let getNote = document.querySelector("#writeNote");
const btnAddNote = document.getElementById("addNote");
const noteStyle = document.querySelector(".noteBG");
const notesContainer = document.getElementById("noteContainer");

////////////////////////////////////////////////////////////////////////

//------------OPTION BUTTON------------//

const openOpt = document.getElementsByClassName("optionBtn");
const ulArr = document.getElementsByClassName("ulOption");

//------------ADD NOTE BUTTON------------//

const createNewNote = function () {
  //new div
  const createDiv = document.createElement("form");
  //for Option Button
  const createOptionBtn = document.createElement("button");
  const newInputTitle = document.createElement("input");
  const newNoteContent = document.createElement("textarea");
  const div4OptBtn = document.createElement("div");
  const div4drpDwnBtn = document.createElement("div");
  const drpDwnUl = document.createElement("ul");
  const editDrpDwnLi = document.createElement("li");
  const deleteDrpDwnLi = document.createElement("li");
  //   const newTitle = document.getElementsByClassName("generateTitle");

  //needs to change to icon!!!!!!!!!--------------------------
  createOptionBtn.textContent = `...`;

  //Will Generate Note's div
  createDiv.classList.add("noteBG");

  //Button
  createOptionBtn.classList.add("optionBtn");

  //Generate Title
  newInputTitle.setAttribute("type", "text");
  newInputTitle.classList.add("generateTitle");

  //Generate new Notes Content
  newNoteContent.classList.add("newNote");

  //Will create the new div inside the Note's container
  //notesContainer=Parent
  //createDiv=Child
  div4OptBtn.classList.add("div4Btn");
  createDiv.classList.add("newNoteContent");
  notesContainer.appendChild(div4OptBtn);

  div4OptBtn.appendChild(createDiv);

  createDiv.appendChild(newInputTitle);

  div4OptBtn.appendChild(div4drpDwnBtn);
  div4drpDwnBtn.classList.add("drpDownList");

  div4drpDwnBtn.appendChild(createOptionBtn);

  div4drpDwnBtn.appendChild(drpDwnUl);
  drpDwnUl.appendChild(editDrpDwnLi);
  drpDwnUl.appendChild(deleteDrpDwnLi);
  drpDwnUl.classList.add("ulOption");
  drpDwnUl.classList.add("hideOptBtn");
  // drpDwnLi.appendChild(document.createTextNode("Delete"));

  createDiv.appendChild(newNoteContent);

  //After creating components, it gets the value from Note creator of the created Note

  editDrpDwnLi.innerHTML = `<a href="#">Edit</a>`;
  deleteDrpDwnLi.innerHTML = `<a href="www.google.com" target="_blank"class="delMe">Delete</a>`;
  newInputTitle.value = getTitle.value;
  newNoteContent.value = getNote.value;
  newInputTitle.readOnly = true;
  newNoteContent.readOnly = true;

  //clears the Note creator's content
  getTitle.value = "";
  getNote.value = "";

  // const delBtn = document.querySelector(".delMe");
  // const deleteMe = function () {
  //   const deleteNoteBG = document.querySelector(".noteBG");

  //   deleteNoteBG.remove();
  // };

  // delBtn.addEventListener("click", deleteMe);

  // const ulO = document.getElementsByClassName("ulOption");
  for (let i = 0; i < openOpt.length; i++) {
    const showMeModal = function () {
      ulArr[i].classList.toggle("hideOptBtn");
      console.log(openOpt.length, ulArr.length);
      // ulArr[i].classList.add("showOptBtn");

      // closeModalALL[i].addEventListener("click", closeMeModal);
    };
    openOpt[i].addEventListener("click", showMeModal);
  }
};
//////////////////

btnAddNote.addEventListener("click", createNewNote);
