import React from 'react';

import './site.css';
import './file-list-json.css';
import ImageListWebResult from './file-list-web-result';

const API_STRING = 'http://localhost:5000/imagelist';

class ImageListJson extends React.Component<{}, ImageListWebResult[]> {
    constructor(props : any) {
      super(props);

      this.state = [] as ImageListWebResult[];
    }

    componentDidMount() {
        fetch(API_STRING)
          .then(response => response.json())
          .then(x => x as ImageListWebResult[])
          .then(json => this.setState(json));
    }

    render() {
        let state = this.state;
        const fileMetadataFromApi : Array<ImageListWebResult> = [];
        Object.keys(state).forEach(function(i : any) {
          fileMetadataFromApi.push(state[i] as ImageListWebResult);
        });
        let jsonString : string = JSON.stringify(fileMetadataFromApi);

        return (
            <div className='file-list-json'>
                { jsonString }
            </div>
        );
    }
}

export default ImageListJson;
