import React from 'react';
import { Row, Col } from 'react-bootstrap';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import './site.css';
import './file-metadata.css';

const FileMetaData = ({fileMetadataJson} : {fileMetadataJson?: string}) => (
    <div className="file-metadata">
        <Row className='full-height-row m-0'>
            <Col xs={2}>
            </Col>
            <Col xs={10}>
                <pre className='json-box'>{fileMetadataJson}</pre>
            </Col>
        </Row>
    </div>
);

// class FileMetaData extends React.Component {
//     render() {
//         return (
//             <Row className='full-height-row m-0'>
//                ...
//             </Row>
//         );
//     }
// }

export default FileMetaData;
