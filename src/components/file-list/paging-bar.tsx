import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import './site.css';
import './paging-bar.css';

function PagingBar({processedQuery, page, prevLink, nextLink, prevClickHandler, nextClickHandler} : {processedQuery: string, page : number, prevLink : string, nextLink : string, prevClickHandler : () => void, nextClickHandler : () => void} ) {
    useEffect(() => {
        var prevLink = document.getElementById("prev-link");
        if (prevLink != null)
            prevLink.onclick = prevClickHandler;

        var nextLink = document.getElementById("next-link");
        if (nextLink != null)
            nextLink.onclick = nextClickHandler;
    });

    return (

        // @{string prevlink = Model.ConstructLink(Model.ActiveSearchQuery, Model.PageIndex - 1, 0);}
        // @{string nextlink = Model.ConstructLink(Model.ActiveSearchQuery, Model.PageIndex + 1, 0);}
        <div className='paging-bar'>
            <Row>
                <Col><a id='prev-link' className='paging-link' href={prevLink}>Prev</a></Col>
                <Col><a id='next-link' className='paging-link' href={nextLink}>Next</a></Col>
            </Row>
        </div>
        // <div class="row zero-padding row-eq-height">
        //     <div class="col-md-6 col-style"><a href="@prevlink">Prev</a></div>
        //     <div class="col-md-6 col-style"><a href="@nextlink">Next</a></div>
        // </div>
    );
}

export default PagingBar;
