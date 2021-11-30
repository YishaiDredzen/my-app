import logo from './logo.svg';
import './App.css';

function App() {

const results = [
  { text: "war", filename: "war.mp3"},
  { text: "peace", filename: "peace.mp3"},
  { text: "state", filename: "state.mp3"},
]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <input type="text"></input>
      
          <button>
            Enter
          </button>
          <div>
            <ul>
              {results.map(result => <li><a href="">{result.text}</a></li>)}
            </ul>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
