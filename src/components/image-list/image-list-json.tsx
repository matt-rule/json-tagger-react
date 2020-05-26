import React from 'react';

import './site.css';
import './image-list-json.css';

const API_STRING = 'http://localhost:5000/imagelist';

type ImageListWebResult = {
  origFilePath: string;
  thumb: string;
}

class ImageListJson extends React.Component<{}, ImageListWebResult[]> {
    constructor(props : any) {
      super(props);

      this.state = [] as ImageListWebResult[];
      //this.state = [{"origFilePath": "test", "thumb": "test2"},{"origFilePath": "test3", "thumb": "test4"}];
      // this.state = {
      //   json: "",
      // };
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
            <div className='image-list-json'>
                { jsonString }
            </div>
        );
    }
}

export default ImageListJson;
