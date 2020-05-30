import React from 'react';

import './site.css';
import './image-preview.css';

const ImagePreview = ({imageGuid} : {imageGuid?: string}) => (
    <div className='image-preview'>
        <a className='image-preview-link' href={imageGuid === null ? '' : imageGuid}>
            <img className='centralised-image' src={imageGuid === null ? '' : imageGuid} alt='Preview' />
        </a>
    </div>
);

export default ImagePreview;
