import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchSection from './components/searchSection'

const App = () => {

const results = [
  { text: "wars", filename: "war.mp3"},
  { text: "peaces", filename: "peace.mp3"},
  { text: "states", filename: "state.mp3"},
]

let videoId = "mFQYSxWn7hU";


const ApiUrl = "https://www.google.com/search?q="

const search = (searchString) => {
  fetch(ApiUrl+searchString)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
}

// const searchText = ''
const [searchText, setSearchText] = useState('')

const inputSearchChars = (char) => {
// const [searchText, setSearchText] = useState('')
  setSearchText(searchText+char)
  // searchText+=char
}

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="text" className="search-box" value={searchText} onKeyDown={event => inputSearchChars(event.key)} />
          <button onClick={() => search(searchText)}>Search</button>
          <div>
            <ul>
              {results.map(result => <li><a href="">{result.text}</a></li>)}
            </ul>
          </div>
        </div>
      </header>
      <main>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+videoId} title="Toldos Yisrael" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <ul>
          <li>list item...</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
