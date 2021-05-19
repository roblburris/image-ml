import React, { useEffect, useState } from 'react';
import './Button.css';
import useUploadImage from '../../hooks/uploadImage';

type ProgressBtnProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
}

function ProgressButton({state, setState}: ProgressBtnProps) {
  var [progress, setProgress] = useState(0);

  useEffect(() => {
    document.getElementById("progress-btn")?.classList.add("progress-btn");
  });

  useUploadImage(progress, setProgress, setState);

  return (
    <button id="progress-btn">
      <span className="btn-text">
        Uploading... (Progress {progress}%) (Will make loader)
      </span>
    </button>
  )
}

export default ProgressButton;