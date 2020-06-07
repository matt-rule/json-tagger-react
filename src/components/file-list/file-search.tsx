import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './site.css';
import './file-search.css';

class FileSearch extends React.Component<{submitPropFunction : (searchString : string) => void}, {searchInput : string, functionToCall : (searchString : string) => void}> {
    constructor(props : any) {
        super(props);
        this.state = {searchInput: '', functionToCall: this.props.submitPropFunction};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event : any) {
        this.setState({searchInput: event.target.value as string});
    }

    handleSubmit(event : any) {
        this.state.functionToCall(this.state.searchInput);
        //window.location.href = '/file-list?query=' + this.state.searchInput;
        event.preventDefault();
    }

    render() {
        return (
            <div className='search-outer'>
                <form onSubmit={this.handleSubmit}>
                    <Row className='search-row'>
                        <Col xs={11} className='col-style input-col'>
                            <input type='text' className='search-text-input' value={this.state.searchInput} onChange={this.handleChange} />
                        </Col>
                        <Col xs={1} className='col-style zero-left-right-padding'>
                            <input type='submit' className='search-button' value='Search' />
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }
}

export default FileSearch;
