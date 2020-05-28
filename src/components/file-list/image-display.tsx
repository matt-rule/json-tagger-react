import React from 'react';

import './site.css';
import './image-display.css';

const ImageDisplay = ({imageGuid} : {imageGuid?: string}) => (
    <div className="image-display">
        <img src={imageGuid === null ? '' : imageGuid} alt='Image preview' />
    </div>
);

export default ImageDisplay;
