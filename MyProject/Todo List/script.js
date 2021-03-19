"use strict";

const getTitle = document.getElementById("createTitle").textContent;
const getNote = document.getElementById("writeNote").textContent;
const btnAddNote = document.getElementById("addNote");
const noteStyle = document.querySelector("noteBG");
const notesContainer = document.getElementById("noteContainer");

const createNewNote = function () {
  const createDiv = document.createElement("div");
  createDiv.classList.add("noteBG");
  createDiv.textContent = "asdsasd";
  //Will create the new div inside the Note's container
  notesContainer.appendChild(createDiv);
};

btnAddNote.addEventListener("click", createNewNote);
