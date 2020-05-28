import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './site.css';
import './file-grid.css';
import FileListWebResult from './file-list-web-result';

const FileGrid = ({fileMetadataArray} : {fileMetadataArray : Array<FileListWebResult>}) => (
  <div className='file-grid'>
    <Row>
      {
        fileMetadataArray
        .map(x =>
          <Col key={x.guid} xs={2}>
            <img alt='thumbnail' src={'file/thumbnails/thumb_' + x.guid + '.jpg'} />
            <p className='no-wrap-text'>
              {x.origFilePath}
            </p>
          </Col>
        )
      }
    </Row>
  </div>
);

export default FileGrid;
