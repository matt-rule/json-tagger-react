import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './site.css';
import './file-search.css';

class FileSearch extends React.Component<{}, {searchInput : string}> {
    constructor(props : any) {
        super(props);
        this.state = {searchInput: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event : any) {
        this.setState({searchInput: event.target.value as string});
    }

    handleSubmit(event : any) {
        // alert('A name was submitted: ' + this.state.searchInput);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Row className='search-row'>
                    <Col xs={11} className='col-style'>
                        <input type='text' className='search-text-input' value={this.state.searchInput} onChange={this.handleChange} />
                    </Col>
                    <Col xs={1} className='col-style'>
                        <input type='submit' className='search-button' value='Search' />
                    </Col>
                </Row>
            </form>
        );
    }
}

export default FileSearch;
