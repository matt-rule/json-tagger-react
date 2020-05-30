import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './site.css';
import './file-grid.css';
import FileListWebResult from './file-list-web-result';

const FileGrid = ({fileMetadataArray, functionToCall} : {fileMetadataArray : Array<FileListWebResult>, functionToCall : (index : number) => void}) => (
  <div className='file-grid'>
    <Row>
      {
        fileMetadataArray
        .map((x, i) =>
          <Col key={x.guid} xs={2}>
            <img alt='thumbnail' src={'file/thumbnails/thumb_' + x.guid + '.jpg'} onClick={e => functionToCall(i)} />
            <p className='no-wrap-text' onClick={e => functionToCall(i)}>
              {x.origFilePath}
            </p>
          </Col>
        )
      }
    </Row>
  </div>
);

export default FileGrid;
