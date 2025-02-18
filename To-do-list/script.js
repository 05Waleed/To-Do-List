// Get references to input field and list container
const inputBox = document.getElementById("input-box"); // This stores the reference of the input text field
const listContainer = document.getElementById("list-container"); // This stores the reference of the <ul> list container

// Function to add a new task to the list
function addTask() {  
    // Check if the input field is empty
    if (inputBox.value === '') {  
        alert("You must write something!"); // Alert the user if no text is entered
    } else {
        // Create a new <li> element (task item)
        let li = document.createElement("li");  

        // Why create a new element? 
        // -> appendChild() only works with DOM elements, not plain text.
        // -> inputBox.value is plain text, so we need to wrap it inside an <li>.
        
        li.innerHTML = inputBox.value; // Set the text inside the <li>
        listContainer.appendChild(li); // Append the new <li> to the list container

        // Create a <span> element (delete button)
        let span = document.createElement("span");  
        span.innerHTML = "\u00d7"; // Unicode for the "×" delete icon
        li.appendChild(span); // Append the delete button inside <li>
    }

    inputBox.value = ""; // Clear the input field after adding a task
    saveData(); // Save the updated list in localStorage
}

// Add an event listener to the list container to handle clicks on tasks
listContainer.addEventListener("click", function(e) {
    // If the clicked element is an <li> (task), toggle the "checked" class
    if (e.target.tagName === "LI") {  
        e.target.classList.toggle("checked"); // Add/remove checked class for strikethrough effect
        saveData(); // Save changes to localStorage
    } 
    // If the clicked element is a <span> (delete button), remove the parent <li>
    else if (e.target.tagName === "SPAN") {  
        e.target.parentElement.remove(); // Remove the task
        saveData(); // Save changes to localStorage
    }
}, false);

// Function to save the current task list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);  
    // Save the inner HTML of the list container, so tasks persist after refresh
}

// Function to load tasks from localStorage when the page reloads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");  
    // Load saved tasks from localStorage and display them in the list
}

showTask(); // Call showTask() to load saved tasks when the page loads
