// Get the textarea element
//first step is to get the textarea element
const textarea = document.getElementById("myTextarea");

// Function to save the textarea content to local storage
//write a function that saves textcontent area on local storage that has no expiry!!!!!!!!
function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
}

// Check if there's existing data in local storage and populate the textarea
//check out the local storage space and fill up Key-Value Pairs!!!!!!!!!
if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}

// Add an event listener to the textarea for input changes and save to local storage
//ADD EVENT LISTENERS FOR CHANGES ON INPUTS IN TEXT AREA
textarea.addEventListener("input", saveToLocalStorage);
function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  } 