import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ImageDisplay from './image-display';
import FileListJson from './file-grid';
import FileMetaData from './file-metadata';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import './file-list-page-layout.css';

import '../../App.css';
import NavBar from '../nav-bar';

class FileListPageLayout extends React.Component {
    render() {
        return (
            <div className="App">
              <NavBar />
                <div className='file-list-layout'>
                    <Row>
                        <Col xs={8}>
                            <FileListJson />
                        </Col>
                        <Col xs={4}>
                            <ImageDisplay />
                            <FileMetaData />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default FileListPageLayout;
