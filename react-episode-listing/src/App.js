import './App.css';
import CompressFM from './assets/podcast-cover.png';

/**
 * Phase 1: build out center UI without todos
 * Phase 2: build out the todos
 * Phase 3: Todo functionality
 */
function App() {
  return (
    <div className="App">
      
        <img src={CompressFM} alt="podcast cover" className="image--style" />
      
      <div className="listing--container">
        <p>Listen to all the COMPRESSED.FM episodes</p>
      </div>
    </div>
  );
}

export default App;
