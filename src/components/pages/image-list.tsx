import React from 'react';

const API_STRING = 'http://localhost:5000/imagelist';
  
class ImageList extends React.Component<{}, { json:string }> {
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
            <div className="ImageList">
                { this.state.json }
            </div>
        );
    }
}

export default ImageList;
