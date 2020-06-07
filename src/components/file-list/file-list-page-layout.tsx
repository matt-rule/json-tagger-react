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
const LOCAL_STRING = 'file-list';

type FileListPageState = {
    fileMetadataArray : Array<FileListWebResult>
    searchString : string
    page: number
    selectedIndex : number
}

class FileListPageLayout extends React.Component<{}, {pageState : FileListPageState}> {

    constructor(props : any) {
        super(props);

        this.state = {
            pageState : {
                fileMetadataArray : [] as Array<FileListWebResult>,
                searchString : '',
                page : 1,
                selectedIndex : 0
            } as FileListPageState
        }
    }

    constructApiQueryString(query : string, page : number) {
        const args = [
            query === "" ? "" : ("query=" + query),
            page === 1 ? "" : ("page=" + page)
        ].filter(x => x !== "")
        return API_STRING + (args.length === 0 ? "" : "?" + args.reduce((x, y) => x + "&" + y));
    }

    constructLocalQueryString(query : string, page : number, selected : number) {
        const args = [
            query === "" ? "" : ("query=" + query),
            page === 1 ? "" : ("page=" + page),
            selected === 0 ? "" : ("selected=" + selected)
        ].filter(x => x !== "")
        return LOCAL_STRING + (args.length === 0 ? "" : "?" + args.reduce((x, y) => x + "&" + y));
    }

    applyState(state : FileListPageState) {
        this.setState({pageState : state});

        window.history.pushState(
            state,
            'Json Tagger',
            this.constructLocalQueryString(state.searchString, state.page, state.selectedIndex)
        );
    }
    
    doApiFetch(searchInput : string, resultPage : number) {
        fetch(this.constructApiQueryString(searchInput, resultPage), {
            // headers : { 
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            //    }
        })
            .then(response => response.json())
            .then(x => x as FileListWebResult[])
            .then(json => this.applyState(
                {
                    fileMetadataArray : json as Array<FileListWebResult>,
                    searchString : searchInput,
                    page : resultPage,
                    selectedIndex : 0
                } as FileListPageState
            ))
    }

    componentDidMount() {
        this.doApiFetch('', 1);
    }

    handleSelectedImageChanged = (index : number) => {
        this.applyState(
            {
                fileMetadataArray : this.state.pageState.fileMetadataArray,
                searchString : this.state.pageState.searchString,
                page : this.state.pageState.page,
                selectedIndex : index
            } as FileListPageState
        );
    }

    handleSearchSubmit = (searchString : string) => {
        this.doApiFetch(searchString, 1);
    }

    setPageNumber = (newPageNumber : number) => {
        this.doApiFetch(this.state.pageState.searchString, newPageNumber);
    }

    safeDecrement = (n : number) => {
        return n <= 1 ? 1 : n - 1
    }

    safeIncrement = (n : number) => {
        return n + 1
    }

    handlePrevButtonClicked = () => {
        this.setPageNumber(this.safeDecrement(this.state.pageState.page));

        return false;
    }

    handleNextButtonClicked = () => {
        this.setPageNumber(this.safeIncrement(this.state.pageState.page));

        return false;
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
                            <PagingBar processedQuery={
                                this.state.pageState?.searchString ?? ""}
                                page={this.state.pageState?.page ?? 1}
                                prevLink={this.constructLocalQueryString(
                                    this.state.pageState?.searchString,
                                    this.safeDecrement(this.state.pageState.page),
                                    0
                                )}
                                nextLink={this.constructLocalQueryString(
                                    this.state.pageState?.searchString,
                                    this.safeIncrement(this.state.pageState.page),
                                    0
                                )}
                                prevClickHandler={this.handlePrevButtonClicked}
                                nextClickHandler={this.handleNextButtonClicked}
                            />
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
