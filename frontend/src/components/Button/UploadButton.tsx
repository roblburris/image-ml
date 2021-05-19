import React from 'react';
import { progressState } from '../../types';
import './Button.css';

type UploadBtnProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
}

function UploadButton({state, setState}: UploadBtnProps) {
  return (
    <button onClick={() => {
      setState(progressState);
    }}>
      <span className="btn-text">
        <i className="fa fa-upload"></i>&nbsp;
        Upload
      </span>
    </button>
  );
}

export default UploadButton;