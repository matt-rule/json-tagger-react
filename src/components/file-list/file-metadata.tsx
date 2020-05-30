import React from 'react';
import { Row, Col } from 'react-bootstrap';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import './site.css';
import './file-metadata.css';

class FileMetaData extends React.Component {
    render() {
        return (
            <div className="file-metadata">
                <Row className='full-height-row m-0'>
                    <Col xs={2}>
                    </Col>
                    <Col xs={10} className='bg-white'>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FileMetaData;
