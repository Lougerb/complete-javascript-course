"use strict";

let getTitle = document.querySelector(".createTitle");
let getNote = document.querySelector("#writeNote");
const btnAddNote = document.getElementById("addNote");
const noteStyle = document.querySelector(".noteBG");
const notesContainer = document.getElementById("noteContainer");

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////

const createNewNote = function () {
  //new div
  const createDiv = document.createElement("form");
  //for Option Button
  const createOptionBtn = document.createElement("button");
  const newInputTitle = document.createElement("input");
  const newNoteContent = document.createElement("textarea");
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
  notesContainer.appendChild(createDiv);
  notesContainer.appendChild(createOptionBtn);
  createDiv.appendChild(newInputTitle);
  createDiv.appendChild(newNoteContent);

  //After creating components, it gets the value from Note creator of the created Note

  newInputTitle.value = getTitle.value;
  newNoteContent.value = getNote.value;

  //clears the Note creator's content
  getTitle.value = "";
  getNote.value = "";
};

btnAddNote.addEventListener("click", createNewNote);
