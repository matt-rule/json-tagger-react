import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import './site.css';
import './paging-bar.css';

function PagingBar({prevUrl, nextUrl, prevClickHandler, nextClickHandler} : {prevUrl : string, nextUrl : string, prevClickHandler : () => void, nextClickHandler : () => void}) {
    useEffect(() => {
        var prevLink = document.getElementById("prev-link");
        if (prevLink != null)
            prevLink.onclick = prevClickHandler;

        var nextLink = document.getElementById("next-link");
        if (nextLink != null)
            nextLink.onclick = nextClickHandler;
    });

    return (
        <div className='paging-bar'>
            <Row>
                <Col><a id='prev-link' className='paging-link' href={prevUrl}>Prev</a></Col>
                <Col><a id='next-link' className='paging-link' href={nextUrl}>Next</a></Col>
            </Row>
        </div>
    );
}

export default PagingBar;
