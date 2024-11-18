// Get references to the input box and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
  if (inputBox.value === "") {
    // Alert if the input box is empty
    alert("You must write something!");
  } else {
    // Create a new list item
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; // Set task text
    listContainer.appendChild(li); // Add task to the list

    // Add a close button (x) to the task
    let span = document.createElement("span");
    span.innerHTML = "   \u00d7"; // Unicode for ×
    li.appendChild(span);
  }

  // Clear the input box
  inputBox.value = "";

  // Save the current list to local storage
  saveData();
}

// Add event listener for interactions with the list
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // Toggle 'checked' class when a list item is clicked
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // Remove the task if the close button is clicked
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Function to save the task list to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load saved tasks from local storage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Load tasks on page load
showTask();
