import React from 'react';
import { Row, Col } from 'react-bootstrap';

import FileGrid from './file-grid';
import FileInfoItem from './file-info-item';
import FileMetaData from './file-metadata';
import FileSearch from './file-search';
import ImageDisplay from './image-preview';
import PagingBar from './paging-bar';
import UrlHandling from './url-handling';

import QueryString from 'querystring';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import './file-list-page-layout.css';

import '../../App.css';
import NavBar from '../nav-bar';

type FileListPageState = {
    fileMetadataArray : Array<FileInfoItem>
    searchString : string
    page: number
    selectedIndex : number
}

interface FileListPageProps {
    location : {
        search : string
    }
}

interface FileListQueryParams {
    query? : string
    page? : string
    selected? : string
}

class FileListPageLayout extends React.Component<FileListPageProps, {pageState : FileListPageState}> {

    constructor(props : any) {
        super(props);

        let queryParams = QueryString.decode(props.location.search.substr(1)) as FileListQueryParams

        this.state = {
            pageState : {
                fileMetadataArray : [] as Array<FileInfoItem>,
                searchString : queryParams.query ?? '',
                page : queryParams.page ?? 1,
                selectedIndex : queryParams.selected ?? 0
            } as FileListPageState
        }
    }

    applyState(state : FileListPageState) {
        this.setState({pageState : state});

        window.history.pushState(
            state,
            'Json Tagger',
            UrlHandling.constructLocalQueryString(state.searchString, state.page, state.selectedIndex)
        );
    }
    
    doApiFetch(searchInput : string, resultPage : number) {
        fetch(UrlHandling.constructApiQueryString(searchInput, resultPage), {})
            .then(response => response.json())
            .then(x => x as FileInfoItem[])
            .then(json => this.applyState(
                {
                    fileMetadataArray : json as Array<FileInfoItem>,
                    searchString : searchInput,
                    page : resultPage,
                    selectedIndex : 0
                } as FileListPageState
            ))
    }

    componentDidMount() {
        this.doApiFetch(this.state.pageState.searchString, this.state.pageState.page);
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

        return false;
    }

    // Returns a parameterless void function which calls handleSelectedImageChanged with the given index.
    metaHandleSelectedImageChanged = (index : number) => {
        return (() => this.handleSelectedImageChanged(index));
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
        // TODO: Implement maximum
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

    getSelectedImageMetadata = (pageState : FileListPageState) : string => {
        let selectedObject = pageState.fileMetadataArray[pageState.selectedIndex];

        if (selectedObject == null || selectedObject.metadataJson == null)
            return "";

        return selectedObject.metadataJson;
    }

    render() {
        return (
            <div className="App">
              <NavBar />
                <div className='file-list-layout'>
                    <Row>
                        <Col xs={8}>
                            <FileSearch submitPropFunction={this.handleSearchSubmit} />
                            <FileGrid
                                fileMetadataArray={this.state.pageState?.fileMetadataArray}
                                itemLinkClickHandler={this.metaHandleSelectedImageChanged}
                                incompleteUrl={UrlHandling.incompleteLocalQueryString(
                                    this.state.pageState.searchString,
                                    this.state.pageState.page
                                )}
                                />
                            <PagingBar
                                prevUrl={UrlHandling.constructLocalQueryString(
                                    this.state.pageState?.searchString,
                                    this.safeDecrement(this.state.pageState.page),
                                    0
                                )}
                                nextUrl={UrlHandling.constructLocalQueryString(
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
                            <FileMetaData fileMetadataJson={this.getSelectedImageMetadata(this.state.pageState)}/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default FileListPageLayout;
