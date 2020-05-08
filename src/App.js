import React from 'react';
import logo from './logo.svg';
import './App.css';

const userAction = async () => {
    const response = await fetch('http://localhost:5000/weatherforecast');
    const myJson = await response.json(); //extract JSON from the http response

    document.getElementById("test").innerText = "myJson";
    // do something with myJson
  }

function App() {
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
                <p id='test'></p>
                <p>
                    <button type="submit" onClick={userAction}>Search</button>
                </p>
            </header>
        </div>
    );
}

export default App;
