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
  newInputTitle.setAttribute("placeholder", "Empty Title...");
  newInputTitle.classList.add("generateTitle");

  //Generate new Notes Content
  newNoteContent.classList.add("newNote");
  newNoteContent.setAttribute("placeholder", "Empty Note...");

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

  editDrpDwnLi.innerHTML = `<span>Edit</span>`;
  deleteDrpDwnLi.innerHTML = `<span>Delete</span>`;
  editDrpDwnLi.classList.add("editBtn");
  deleteDrpDwnLi.classList.add("deleteBtn");

  newInputTitle.value = getTitle.value;
  newNoteContent.value = getNote.value;
  newInputTitle.readOnly = true;
  newNoteContent.readOnly = true;

  //clears the Note creator's content
  getTitle.value = "";
  getNote.value = "";

  //To Show Option
  createOptionBtn.addEventListener("click", function () {
    drpDwnUl.classList.toggle("hideOptBtn");
  });
  //To prevent Option stay open when clicking other option
  document.addEventListener("mouseup", function (e) {
    if (!drpDwnUl.contains(e.target) && !createOptionBtn.contains(e.target)) {
      drpDwnUl.classList.add("hideOptBtn");
    }
  });

  //EDIT BUTTON=============================================================
  editDrpDwnLi.addEventListener("click", function () {
    const _editOverlay = document.querySelector(".editOverlay");
    const _editMyNote = document.querySelector(".editMyNote");

    //To show Overlay and Note Editor of the current Note
    _editMyNote.classList.remove("editHidden");
    _editOverlay.classList.remove("editHidden");

    //Click anywhere on Overlay then closes Edit without Save change
    document.addEventListener("mouseup", function (e) {
      if (_editOverlay.contains(e.target)) {
        _editOverlay.classList.add("editHidden");
        _editMyNote.classList.add("editHidden");
      }
    });

    console.log("I am Working");
  });

  //Delete Button
  // const deleteBtn = document.
};

btnAddNote.addEventListener("click", createNewNote);
