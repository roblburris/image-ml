import React from 'react';
import './CenterWrapper.css';

import NormalDescription from './Description/NormalDescription';
import UploadButton from './Button/UploadButton';

type CenterWrapperProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
}

function CenterWrapper({state, setState}: CenterWrapperProps) {
  return (
    // Should conditionally render UploadButton (import Progress and stuff from button folder)
    // Should conditionall render Description (normally do normal, but use the image one when processed)
    <div className="CenterWrapper">
      <h1>ImageML</h1>
      <NormalDescription/>
      <UploadButton/> 
    </div>
  );
}

export default CenterWrapper;