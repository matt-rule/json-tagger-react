import React from 'react';

const userAction = async () => {
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
            <div className="TagList">
                <p id='test'></p>
                <p>
                    <button type="submit" onClick={userAction}>Search</button>
                </p>
            </div>
        );
    }
}

export default TagList;
