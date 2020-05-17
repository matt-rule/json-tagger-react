import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ImageDisplay from './image-display';
import ImageListJson from './image-list-json';
import ImageMetaData from './image-metadata';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import './image-list-page-layout.css';

import NavBar from '../nav-bar';

class ImageListPageLayout extends React.Component {
    render() {
        return (
            <div className="App">
              <NavBar />
                <div className='image-list-layout'>
                    <Row>
                        <Col xs={4}>
                            <ImageDisplay />
                            <ImageMetaData />
                        </Col>
                        <Col xs={8}>
                            <ImageListJson />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ImageListPageLayout;
