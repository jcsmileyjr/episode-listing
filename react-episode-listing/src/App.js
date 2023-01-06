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
  console.log(todos);
  return (
    <div className="App">
      <img src={CompressFM} alt="podcast cover" className="image--style" />

      <div className="listing--container">
        <div className="listing__emptyDiv--container"></div>
        <div className="listing__content--container">
          <p>Listen to all the COMPRESSED.FM episodes</p>
          {
            todos.map((todo, index) => (
              <Todo data={todo.content} numbering={index} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
