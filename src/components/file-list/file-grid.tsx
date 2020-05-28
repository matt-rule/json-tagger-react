import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './site.css';
import './file-grid.css';
import FileListWebResult from './file-list-web-result';

const API_STRING = 'http://localhost:5000/imagelist';

class FileGrid extends React.Component<{}, FileListWebResult[]> {
    constructor(props : any) {
      super(props);

      this.state = [] as FileListWebResult[];
    }

    componentDidMount() {
        fetch(API_STRING)
          .then(response => response.json())
          .then(x => x as FileListWebResult[])
          .then(json => this.setState(json));
    }

    render() {
        let state = this.state;
        const fileMetadataFromApi : Array<FileListWebResult> = [];
        Object.keys(state).forEach(function(i : any) {
          fileMetadataFromApi.push(state[i] as FileListWebResult);
        });
        let jsonString : string = JSON.stringify(fileMetadataFromApi);

        var cols =
          fileMetadataFromApi
          .map(x =>
            <Col xs={2}>
              <img src={"file/thumbnails/thumb_" + x.guid + ".jpg"} />
              <p className='no-wrap-text'>
                {x.origFilePath}
              </p>
            </Col>
          )
        return (
          <div className='file-grid'>
            <Row>
              {cols}
            </Row>
          </div>
        );
    }
}

export default FileGrid;
