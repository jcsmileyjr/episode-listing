import "./App.css";
import CompressFM from "./assets/podcast-cover.png";
import Data from './development-data/data.json';
import React, {useState} from 'react'
import Todo from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState(Data);
  const [allChecked, setAllChecked] = useState(false);

  /**
   * Function to update the scratch off a todo when the checkbox is checked
   */
  const scratchOffTodo = (id) => {
    setTodos(todos.map((todo) => {
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
    }))
  }

  /**
   * function to scratch off all todos
   */
  const checkall = () => {
    if(!allChecked){
      setTodos(todos.map((todo) => {
        todo.done = true;
        return todo;
      }))
      setAllChecked(true);
    }else{
      setTodos(todos.map((todo) => {
        todo.done = false;
        return todo;
      }))
      setAllChecked(false);
    }
  }

  return (
    <div className="App">
      <img src={CompressFM} alt="podcast cover" className="image--style" />

      <div className="listing--container">
        <div className="listing__emptyDiv--container"></div>
        <div className="listing__content--container">
          <p>Listen to all the COMPRESSED.FM episodes</p>
          <label htmlFor="checkall" className="listing__checkall--conatiner">
            <input type="checkbox" className="listing__checkall--style" onChange={() => checkall()} />
            Check all
          </label>
          {
            todos.map((todo, index) => (
              <Todo scratch={() => scratchOffTodo(todo.id)}  data={todo} numbering={index} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
