import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import './site.css';
import './file-grid.css';
import FileInfoItem from './file-info-item';

function FileGrid({fileMetadataArray, itemLinkClickHandler, incompleteUrl} : {fileMetadataArray : Array<FileInfoItem>, itemLinkClickHandler : (index : number) => (() => void), incompleteUrl : string}) {
    useEffect(() => {
        for (let i = 0; i < fileMetadataArray.length; i++) {
            var link = document.getElementById("grid-item-" + i);

            if (link != null)
                link.onclick = itemLinkClickHandler(i);
        }
    });

    return (
        <div className='file-grid'>
            <Row>
                {
                    fileMetadataArray
                    .map((x, i) =>
                        <Col key={x.guid} xs={2}>
                            <a id={'grid-item-' + i} href={incompleteUrl + i}>
                                <img alt='thumbnail' src={'/file/thumbnails/thumb_' + x.guid + '.jpg'} />
                                <p className='no-wrap-text'>{x.origFilePath}</p>
                            </a>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
}

export default FileGrid;
