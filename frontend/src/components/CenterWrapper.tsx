import React from 'react';
import './CenterWrapper.css';

import UploadButton from './Button/UploadButton';

function CenterWrapper() {
  return (
    <div className="CenterWrapper">
      <h1>ImageML</h1>
      
      <UploadButton/>
    </div>
  );
}

export default CenterWrapper;