import React from 'react';
import './Button.css';

interface Props {
  setDescImageProgress: (value: any) => void
}

const UploadButton: React.FC<Props> = ({setDescImageProgress}) => {
  return (
    <button onClick={() => {setDescImageProgress('progress')}}> 
      <span className="btn-text">
        <i className="fa fa-upload"></i>&nbsp;
        Upload
      </span>
    </button>
  );
}

export default UploadButton;