import React from 'react';
import './CenterWrapper.css';

import NormalDescription from './Description/NormalDescription';
import UploadButton from './Button/UploadButton';
import ProgressBar from './Description/ProgressBar';

interface Props {
  descImageProgress: 'static' | 'progress' | 'image', 
  setDescImageProgress: (value: any) => void //Value is any because I am not sure what the type is for now,
  uploadTags: 'upload' | 'tags', 
  setUploadTags: (value: any) => void //Not sure what type is, will add later
}

const CenterWrapper: React.FC<Props> = ({descImageProgress, setDescImageProgress, uploadTags, setUploadTags}) => {
  return (
    // Should conditionally render UploadButton (import Progress and stuff from button folder)
    // Should conditionall render Description (normally do normal, but use the image one when processed)
    <div className="CenterWrapper">
      <h1>ImageML</h1>
      {descImageProgress === "static" && <NormalDescription/>}
      {descImageProgress === "progress" && <ProgressBar/>}
      {uploadTags === "upload" && <UploadButton setDescImageProgress={setDescImageProgress} />} 
    </div>
  );
}

export default CenterWrapper;