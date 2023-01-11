let arrayOfTodos = [];
let todoList = document.getElementById("todoList")

/**
 * When the page loads, display the todo items
 * 1. Go get array of objects
 * 2. Use JS to display an input and label
 * 3. Use JS to display those inputs and label using data from the array
 */
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

// Function calling an static file to dynamic create a list of TODOS
function fetchData() {
    fetch('../react-episode-listing/src/development-data/data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        arrayOfTodos = data;
        displayTodos(data);
    })
}

/**
 * Function that dynamically create a list of todos appended to the #todoList div from
 * the data gather in the fetchData().
 * @param {array} todos - Todo objects
 */
const displayTodos = (todos) => {
    todos.forEach((todo) => {
        // Create the checkbox input
        let todoCheckbox = document.createElement('input');
        todoCheckbox.type = 'checkbox';
        todoCheckbox.id = `check- ${todo.id}`;
        todoCheckbox.class = "todo__checkbox--style";
        todoCheckbox.checked = todo.done;

        // Create the label for the above input field
        let todoLabel = document.createElement('label');
        todoLabel.for = `check- ${todo.id}`;
        todoLabel.className = `${todo.done ? "scratch-off" : ""}`;
        todoLabel.textContent = `${todo.id + 1} || ${todo.content}`;

        // Create the container holding the above input and label
        let todoContainer = document.createElement('div');
        todoContainer.className = "todoContainer--style";

        // Append the container of input and label to the #todoList div
        todoContainer.append(todoCheckbox);
        todoContainer.append(todoLabel);
        todoList.append(todoContainer)
    })
}