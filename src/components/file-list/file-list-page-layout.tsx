import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ImageDisplay from './image-display';
import FileGrid from './file-grid';
import FileMetaData from './file-metadata';
import FileListWebResult from './file-list-web-result';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import './file-list-page-layout.css';

import '../../App.css';
import NavBar from '../nav-bar';

const API_STRING = 'http://localhost:5000/imagelist';

type FileListPageState = {
    fileMetadataArray : Array<FileListWebResult>
    selectedIndex : number
}

class FileListPageLayout extends React.Component<{}, {pageState : FileListPageState}> {

    constructor(props : any) {
      super(props);

      this.state = {pageState : {fileMetadataArray : [] as Array<FileListWebResult>, selectedIndex : 0} as FileListPageState}
    }
    
    componentDidMount() {
        fetch(API_STRING)
          .then(response => response.json())
          .then(x => x as FileListWebResult[])
          .then(json => this.setState({pageState : {fileMetadataArray : json as Array<FileListWebResult>, selectedIndex : 0} as FileListPageState}))
    }

    handleSelectedImageChanged() {
        
    }

    render() {
        let fileMetadataArray = this.state.pageState.fileMetadataArray
        return (
            <div className="App">
              <NavBar />
                <div className='file-list-layout'>
                    <Row>
                        <Col xs={8}>
                            <FileGrid fileMetadataArray={fileMetadataArray} />
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
