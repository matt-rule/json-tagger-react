import React, { useEffect } from 'react';
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

const prevLink : (processedQuery : string, page : number) => string = (processedQuery : string, page : number) => {
    let queryArg = processedQuery === "" ? "" : ("query=" + processedQuery);
    let pageArg = page === 1 ? "" : ("page=" + page);
    let args = [queryArg, pageArg].filter(x => x !== "")
    return "file-list" + (args.length === 0 ? "" : "?" + args.reduce((x, y) => x + "&" + y));
}

const nextLink : (processedQuery : string, page : number) => string = (processedQuery : string, page : number) => {
    return "file-list";
}

function prevLinkClickHandler() {
    return false;
}

function nextLinkClickHandler() {
    return false;
}

function PagingBar({processedQuery, page} : {processedQuery: string, page : number} ) {
    useEffect(() => {
        var prevLink = document.getElementById("prev-link");
        if (prevLink != null)
            prevLink.onclick = prevLinkClickHandler;

        var nextLink = document.getElementById("next-link");
        if (nextLink != null)
            nextLink.onclick = nextLinkClickHandler;
    });

    return (

        // @{string prevlink = Model.ConstructLink(Model.ActiveSearchQuery, Model.PageIndex - 1, 0);}
        // @{string nextlink = Model.ConstructLink(Model.ActiveSearchQuery, Model.PageIndex + 1, 0);}
        <div className='paging-bar'>
            <Row>
                <Col><a id='prev-link' className='paging-link' href={prevLink(processedQuery, page)}>Prev</a></Col>
                <Col><a id='next-link' className='paging-link' href={nextLink(processedQuery, page)}>Next</a></Col>
            </Row>
        </div>
        // <div class="row zero-padding row-eq-height">
        //     <div class="col-md-6 col-style"><a href="@prevlink">Prev</a></div>
        //     <div class="col-md-6 col-style"><a href="@nextlink">Next</a></div>
        // </div>
    );
}

export default PagingBar;
