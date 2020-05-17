import React from 'react';

import '../../App.css';
import NavBar from '../nav-bar';

const fetchData = async () => {
    const element = document.getElementById("test");
    if (element) {
        const response = await fetch('http://localhost:5000/taglist');
        const myJson = await response.json(); //extract JSON from the http response

        element.innerText = myJson;
    }
}
  
class TagList extends React.Component {
    render() {
        return (
            <div className="App">
              <NavBar />
                <div className="TagList">
                    <p id='test'></p>
                    <p>
                        <button type="submit" onClick={fetchData}>Search</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default TagList;
