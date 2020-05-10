import React from 'react';

import './site.css';
import './image-list-json.css';

const API_STRING = 'http://localhost:5000/imagelist';
  
class ImageListJson extends React.Component<{}, { json:string }> {
    constructor(props : any) {
      super(props);
   
      this.state = {
        json: "",
      };
    }

    componentDidMount() {
        fetch(API_STRING)
          .then(
              response => response.json()
              .then (x => x as string)
          )
          .then(json => this.setState({ json }));
      }

    render() {
        return (
            <div className='image-list-json'>
                { this.state.json }
            </div>
        );
    }
}

export default ImageListJson;
