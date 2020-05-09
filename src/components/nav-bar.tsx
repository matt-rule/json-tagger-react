import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/">
                    Index
                </Link>
                <Link to="/image-list">
                    Image list
                </Link>
            </div>
        );
    }
}

export default NavBar;
