import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './site.css';
import './paging-bar.css';

// const prevLink : (query : string, currentIndex : number) => string = (query : string, currentIndex : number) => {
//     var pageArgs = new List<(string, string)>();

//     if (!String.IsNullOrWhiteSpace(searchQuery))
//         pageArgs.Add(("searchQuery", WebUtility.UrlEncode(searchQuery)));
//     if (pageIndex > 0)
//         pageArgs.Add(("pageIndex", $"{pageIndex}"));
//     if (fileIndex > 0)
//         pageArgs.Add(("fileIndex", $"{fileIndex}"));

//     return
//         "/index"
//         + (pageArgs.Count == 0
//             ? ""
//             : "?" +
//                 pageArgs
//                 .Select(x => $"{x.Item1}={x.Item2}")
//                 .Aggregate((x, y) => x + "&" + y)
//         );
// };

const PageNavigation = () => (

    // @{string prevlink = Model.ConstructLink(Model.ActiveSearchQuery, Model.PageIndex - 1, 0);}
    // @{string nextlink = Model.ConstructLink(Model.ActiveSearchQuery, Model.PageIndex + 1, 0);}
    <div className='paging-bar'>
        <Row>
            <Col><a className='paging-link' href=''>Prev</a></Col>
            <Col><a className='paging-link' href=''>Next</a></Col>
        </Row>
    </div>
    // <div class="row zero-padding row-eq-height">
    //     <div class="col-md-6 col-style"><a href="@prevlink">Prev</a></div>
    //     <div class="col-md-6 col-style"><a href="@nextlink">Next</a></div>
    // </div>
);

export default PageNavigation;
