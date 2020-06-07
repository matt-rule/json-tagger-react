import React from 'react';
import { Row, Col } from 'react-bootstrap';

import FileGrid from './file-grid';
import FileListWebResult from './file-list-web-result';
import FileMetaData from './file-metadata';
import FileSearch from './file-search';
import ImageDisplay from './image-preview';
import PagingBar from './paging-bar';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import './file-list-page-layout.css';

import '../../App.css';
import NavBar from '../nav-bar';

const API_STRING = 'http://localhost:5000/filelist';

type FileListPageState = {
    fileMetadataArray : Array<FileListWebResult>
    searchString : string
    selectedIndex : number
}

class FileListPageLayout extends React.Component<{}, {pageState : FileListPageState}> {

    constructor(props : any) {
        super(props);

        this.state = {
            pageState : {
                fileMetadataArray : [] as Array<FileListWebResult>,
                searchString : '',
                selectedIndex : 0
            } as FileListPageState
        }
    }
    
    doApiFetch(searchInput : string) {
        fetch(searchInput === '' ? API_STRING : API_STRING + '?query=' + searchInput, {
            // headers : { 
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            //    }

        })
            .then(response => response.json())
            .then(x => x as FileListWebResult[])
            .then(json => this.setState(
                {
                    pageState : {
                        fileMetadataArray : json as Array<FileListWebResult>,
                        searchString : '' as string,
                        selectedIndex : 0
                    } as FileListPageState
                }
            ))
    }

    componentDidMount() {
        this.doApiFetch('');
    }

    handleSelectedImageChanged = (index : number) => {
        this.setState(
            {
                pageState : {
                    fileMetadataArray : this.state.pageState.fileMetadataArray as Array<FileListWebResult>,
                    searchString : this.state.pageState.searchString as string,
                    selectedIndex : index
                } as FileListPageState
            }
        );
    }

    handleSearchSubmit = (searchString : string) => {
        this.setState(
            {
                pageState : {
                    fileMetadataArray : this.state.pageState.fileMetadataArray as Array<FileListWebResult>,
                    searchString : searchString as string,
                    selectedIndex : 0
                } as FileListPageState
            }
        );
        // TODO: Consider whether it is better to wait until the fetch is done, then update the display using this.state.pageState.searchString. Might require moving
        // code about between functions, using async, and/or handling state in a different way.
        this.doApiFetch(searchString);
    }

    // TODO: Consider how to reduce the number of null checks
    // Note that a juggling-check on null covers both null and undefined
    // https://stackoverflow.com/questions/28975896/is-there-a-way-to-check-for-both-null-and-undefined
    getSelectedImagePath = (pageState : FileListPageState) : string => {
        let selectedObject = pageState.fileMetadataArray[pageState.selectedIndex];

        if (selectedObject == null)
            return "";

        let regexResult = /(?:\.([^.]+))?$/.exec(selectedObject.origFilePath);

        if (regexResult == null)
            return "";

        let fileExtension = regexResult[1];

        if (fileExtension == null || selectedObject.guid == null)
            return "";

        return 'file/' + selectedObject.guid + '.' + fileExtension;
    }

    render() {
        return (
            <div className="App">
              <NavBar />
                <div className='file-list-layout'>
                    <Row>
                        <Col xs={8}>
                            <FileSearch submitPropFunction={this.handleSearchSubmit} />
                            <FileGrid fileMetadataArray={this.state.pageState?.fileMetadataArray} functionToCall={this.handleSelectedImageChanged} />
                            <PagingBar />
                        </Col>
                        <Col xs={4}>
                            <ImageDisplay imageGuid={this.getSelectedImagePath(this.state.pageState)}/>
                            <FileMetaData />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default FileListPageLayout;
