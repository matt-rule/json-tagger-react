import React from 'react';
import logo from './logo.svg';
import './App.css';
import TagList from './components/tag-list';

const userAction = async () => {
  const element = document.getElementById("test");
  if (element) {
    const response = await fetch('http://localhost:5000/taglist');
    const myJson = await response.json(); //extract JSON from the http response

    element.innerText = myJson;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TagList />
    </div>
  );
}

export default App;
