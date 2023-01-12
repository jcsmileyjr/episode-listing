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
        todoCheckbox.id = todo.id;
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

/**
 * Function to update the list of TODOs when the user clicks on a todo checkbox
 * @param {string} key 
 */
const scratchOffTodo = (key) => {
    const id = Number(key); // Convert the key from a String type to a Number type
    let updateArrayOfTodos = arrayOfTodos.map((todo) => {
        if(todo.id === id){
          if(todo.done){
            todo.done = false;
          }else{
            todo.done = true;
          }
          return todo;
        }else{
          return todo;
        }
      });

    // Remove the current todos and create a new list
    removeTodos()
    displayTodos(updateArrayOfTodos);
    arrayOfTodos = updateArrayOfTodos;
}

let allChecked = false // Global variable use to monitor the change in the checkall checkbox

/**
 * Function to update all todos when the checkall checkbox is checked/unchecked
 */
const checkall = () => {
    let updateArrayOfTodos = [];
    if(!allChecked){
        updateArrayOfTodos = arrayOfTodos.map((todo) => {
            todo.done = true;
            allChecked = true;
            return todo;
        })
    }else{
        updateArrayOfTodos = arrayOfTodos.map((todo) => {
            todo.done = false;
            allChecked = false;
            return todo;
        })
    }

    // Remove the current todos and create a new list
    removeTodos()
    displayTodos(updateArrayOfTodos);
    arrayOfTodos = updateArrayOfTodos;
}

// function to remove the current list of TODOs to update with a new list
const removeTodos = () => {
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
    }
}

// Listen for any TODO change to update the list of TODOs
document.addEventListener('change',function (event){
    if(event.target.id !== 'checkall'){
        scratchOffTodo(event.target.id)
    }else{
        checkall();
    }
}, false)