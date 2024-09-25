/*const notescontainer = document.querySelector( " .notes-container");
const creatbtn= document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
function shownotes(){
    notescontainer.innerHTML=localStorage.getItem("notes");
}
shownotes();
function updatestorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

creatbtn.addEventListener("click", ()=>{
let inputbox= document.createElement("p");
let img = document.createElement("img");
inputbox.className="input-box";
inputbox.setAttribute("contenteditable","true");
img.src="notes-app-img/images/delete.png"
inputbox.appendChild(img)
notescontainer.appendChild(inputbox).appendChild(img) 

});
notescontainer.addEventListener("click",(e) => {
    if (e.target.tagname==="img") {
        e.target.parentElement.remove();
        updatestorage();
        
    }
    else if(e.target.tagname==="p"){
        notes=document.querySelectorforAll(".input -box");
        notes.forEach(nt=>{
            nt.onekeyup=function(){
                updatestorage();
            }
        });
    }

});*/
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to display the saved notes
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
    attachDeleteHandlers(); // Attach delete handlers after loading notes
}

// Function to update localStorage with the current notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Function to create and add a new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    
    img.src = "notes-app-img/images/delete.png";
    img.className = "delete-btn"; // Add a class for easier selection

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    
    updateStorage(); // Update storage when a new note is added
    
    // Attach keyup and delete handlers
    inputBox.addEventListener("keyup", updateStorage);
    img.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });
});

// Function to attach delete handlers to existing notes
function attachDeleteHandlers() {
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
            updateStorage();
        });
    });
}

// Initial call to display the notes
showNotes();

// Attach keyup event listener to existing notes
notesContainer.addEventListener("keyup", updateStorage);
