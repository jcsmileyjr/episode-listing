import "./App.css";
import CompressFM from "./assets/podcast-cover.png";
import Data from './development-data/data.json';
import React, {useState} from 'react'
import Todo from "./components/Todo/Todo";

/**
 * Phase 1: build out center UI without todos - DONE
 * Phase 2: build out the todos
 * Phase 3: Todo functionality
 */
function App() {
  const [todos, setTodos] = useState(Data);

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
  return (
    <div className="App">
      <img src={CompressFM} alt="podcast cover" className="image--style" />

      <div className="listing--container">
        <div className="listing__emptyDiv--container"></div>
        <div className="listing__content--container">
          <p>Listen to all the COMPRESSED.FM episodes</p>
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
