import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/nav-bar';
import Main from './components/main';

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
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
