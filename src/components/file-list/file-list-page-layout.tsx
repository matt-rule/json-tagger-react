import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ImageDisplay from './image-preview';
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

    handleSelectedImageChanged = (index : number) => {
        this.setState({pageState : {fileMetadataArray : this.state.pageState.fileMetadataArray as Array<FileListWebResult>, selectedIndex : index} as FileListPageState});
    }

    render() {
        let fileMetadataArray = this.state.pageState.fileMetadataArray;
        let selectedIndex = this.state.pageState.selectedIndex;
        let selectedObject = this.state.pageState.fileMetadataArray[selectedIndex];
        let regx = /(?:\.([^.]+))?$/;
        let regexResult = regx.exec(selectedObject?.origFilePath);
        let fileExtension : string | undefined = regexResult === null ? undefined : regexResult[1];
        console.log(fileExtension)
        let imagePath : string | undefined = (selectedObject?.guid === null || fileExtension === null) ? undefined : 'file/' + selectedObject?.guid + '.' + fileExtension;
        return (
            <div className="App">
              <NavBar />
                <div className='file-list-layout'>
                    <Row>
                        <Col xs={8}>
                            <FileGrid fileMetadataArray={fileMetadataArray} functionToCall={this.handleSelectedImageChanged} />
                        </Col>
                        <Col xs={4}>
                            <ImageDisplay imageGuid={imagePath}/>
                            <FileMetaData />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default FileListPageLayout;
