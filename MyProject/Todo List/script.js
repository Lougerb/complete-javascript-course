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
  //Div for Option button to make Button appear above Note
  div4OptBtn.appendChild(div4drpDwnBtn);
  div4drpDwnBtn.classList.add("drpDownList");
  //Drop Down menu
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

  ////////////////////////////////
  editDrpDwnLi.addEventListener("click", function () {
    drpDwnUl.classList.add("hideOptBtn");

    const _makeFormMiddle = document.querySelector(".makeFormMiddle");
    const _div4SaveBtn = document.createElement("div");
    const _editMyNote = document.createElement("form");
    const _editMyTitle = document.createElement("input");
    const _editNoteContent = document.createElement("textarea");
    const _saveBtn = document.createElement("button");

    _makeFormMiddle.appendChild(_div4SaveBtn);
    _div4SaveBtn.appendChild(_editMyNote);
    _editMyNote.appendChild(_editMyTitle);
    _editMyNote.appendChild(_editNoteContent);
    _div4SaveBtn.appendChild(_saveBtn);

    _div4SaveBtn.classList.add("div4SaveBtn");
    _editMyNote.classList.add("editMyNote");
    _editMyNote.classList.add("noteBG");
    _editMyNote.classList.add("newNoteContent");
    _editMyTitle.classList.add("editMyTitle");
    _editNoteContent.classList.add("editNoteContent");
    _saveBtn.classList.add("saveBtn");

    _editMyTitle.setAttribute("type", "text");
    _editMyTitle.setAttribute("placeholder", "Empty Title...");
    _editMyNote.setAttribute("placeholder", "Empty Note...");
    _saveBtn.innerHTML = "Save";

    const _editOverlay = document.querySelector(".editOverlay");
    const _saveButton = document.querySelector(".saveBtn");

    //To show Overlay and Note Editor of the current Note
    _editOverlay.classList.remove("editHidden");

    //Click anywhere on Overlay then closes Edit without Save change
    document.addEventListener("mouseup", function (e) {
      if (_editOverlay.contains(e.target)) {
        _div4SaveBtn.remove();
        _editOverlay.classList.add("editHidden");
      }
    });

    //Get values from Current Notes
    _editMyTitle.value = newInputTitle.value;
    _editNoteContent.value = newNoteContent.value;

    //Save Button=======================================================
    _saveButton.addEventListener("click", function () {
      //Replace Current Note/Title content
      newInputTitle.value = _editMyTitle.value;
      newNoteContent.value = _editNoteContent.value;

      _div4SaveBtn.remove();
      //exits editor
      _editOverlay.classList.add("editHidden");
    });

    //Edit Button Note:
    //Instead of hiding/showing an editor
    //I instead pick generating an editor per note
    //in order to prevent saving edit's value to other notes (BUG)
    //then when user close the editor, I use .remove()
    //to remove the parent's or the whole editor's existence
  });

  //DELETE BUTTON=============================================================
  deleteDrpDwnLi.addEventListener("click", function () {
    //Will delete The parent div with the childrens
    div4OptBtn.remove();
  });
};

btnAddNote.addEventListener("click", createNewNote);
