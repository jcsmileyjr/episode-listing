let arrayOfTodos = [];
let todoList = document.getElementById("todoList")

/**
 * When the page loads, display the todo items
 * 1. Go get array of objects
 * 2. Use JS to display an input and label
 * 3. Use JS to display those inputs and label using data from the array
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
    
    fetchData();
});

function fetchData() {
    fetch('../react-episode-listing/src/development-data/data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        arrayOfTodos = data;
        displayTodos(data);
    })
}

const displayTodos = (todos) => {
    todos.forEach((todo) => {
        
        let todoCheckbox = document.createElement('input');
        todoCheckbox.type = 'checkbox';
        todoCheckbox.id = `check- ${todo.id}`;
        todoCheckbox.class = "todo__checkbox--style";
        todoCheckbox.checked = todo.done;

        let todoLabel = document.createElement('label');
        todoLabel.for = `check- ${todo.id}`;
        todoLabel.className = `${todo.done ? "scratch-off" : ""}`;
        todoLabel.textContent = `${todo.id + 1} || ${todo.content}`;

        let todoContainer = document.createElement('div');
        todoContainer.className = "todoContainer--style";

        todoContainer.append(todoCheckbox);
        todoContainer.append(todoLabel);
        todoList.append(todoContainer)
    })

}