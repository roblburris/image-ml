import React from 'react';
import uploadImage from '../../hooks/uploadImage';
import { progressState } from '../../types';
import './Button.css';

type UploadBtnProps = {
  state: number,
  progress: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
  setImageURL: React.Dispatch<React.SetStateAction<string>>,
  setLabel: React.Dispatch<React.SetStateAction<string>>,
  setProgress: React.Dispatch<React.SetStateAction<number>>,
}

function UploadButton({state, progress, setState, setImageURL, setLabel, setProgress}: UploadBtnProps) {
  return (
    <button onClick={() => {
      uploadImage(progress, setProgress, setState, setImageURL, setLabel);
    }} className="button">
      <span className="btn-text">
        <i className="fa fa-upload"></i>&nbsp;
        Upload
      </span>
    </button>
  );
}

export default UploadButton;