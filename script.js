const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box")


//CHECKS FOR THE LAST DATA ON TOTES BEFORE BROWSER TAB WAS CLOSED
//OR REFRESHED AND RETRIEVES IT
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()


//UPDATE NOTE DATA IN STORAGE
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


//CREATE A NOTE PAD ON BUTTON CLICK
createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("P");
    let img = document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})


//DELETE A NOTE PAD WHEN YOU CLICK THE DELETE ICON
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})