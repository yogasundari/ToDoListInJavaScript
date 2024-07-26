//js
const taskInput = document.getElementById("inputtask");
const addButton = document.getElementById("addtask");
const addList = document.getElementById("addlist");
const clearButton = document.getElementById("clearbtn");
const clearAllButton = document.getElementById("clearAll"); // New button
let tasks = [];

function addTask() {
    const userInput = taskInput.value.trim();
    if (userInput !== "") {
        tasks.push({ text: userInput, completed: false });
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    addList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        addList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}


function clearAllTasks() {
    tasks = [];
    displayTasks();
}

addButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearCompletedTasks);
clearAllButton.addEventListener("click", clearAllTasks); // Add event listener for new button
