import React from 'react';

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
                    {/*<Navbar.Brand href="#home">JSON Tagger</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Index</Nav.Link>
                            <Nav.Link href="/file-list">File list</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
