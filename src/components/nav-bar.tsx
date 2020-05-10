import React from 'react';
import { Link } from "react-router-dom";

import 'react-bootstrap/dist/react-bootstrap.min.js';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
                // <div className="NavBar">
                //     <Link to="/">
                //         Index
                //     </Link>
                //     <Link to="/image-list">
                //         Image list
                //     </Link>
                // </div>
        );
    }
}

export default NavBar;
