import React from 'react';
import { Row, Col } from 'react-bootstrap';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import './site.css';
import './image-metadata.css';

class ImageMetaData extends React.Component {
    render() {
        return (
            <div className="image-metadata">
                <Row className='full-height-row'>
                    <Col xs={2}>
                    </Col>
                    <Col xs={10} className='bg-white'>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ImageMetaData;
