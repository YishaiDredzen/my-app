import logo from './logo.svg';
import './App.css';
import Button from './components/button'

function App() {

const results = [
  { text: "war", filename: "war.mp3"},
  { text: "peace", filename: "peace.mp3"},
  { text: "state", filename: "state.mp3"},
]

let videoSource = "https://www.youtube.com/embed/mFQYSxWn7hU";

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="text" className="search-box"></input>
          <Button text="Search" />
          <div>
            <ul>
              {results.map(result => <li><a href="">{result.text}</a></li>)}
            </ul>
          </div>
        </div>
      </header>
      <main>
      <iframe width="560" height="315" src={videoSource} title="Toldos Yisrael" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <ul>
          <li>list item...</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
