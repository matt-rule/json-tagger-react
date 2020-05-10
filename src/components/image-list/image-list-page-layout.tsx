import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImageDisplay from './image-display';
import ImageListJson from './image-list-json';
import ImageMetaData from './image-metadata';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import './image-list-page-layout.css';

class ImageListPageLayout extends React.Component {
    render() {
        return (
            <div className="image-list-layout">
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
        );
    }
}

export default ImageListPageLayout;
