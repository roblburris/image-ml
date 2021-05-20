import React, { useEffect, useState } from 'react';
import './Button.css';
import uploadImage from '../../hooks/uploadImage';

type ProgressBtnProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
}

function ProgressButton({state, setState}: ProgressBtnProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.getElementById("progress-btn")?.classList.add("progress-btn");
    
    uploadImage(progress, setProgress, setState);
  }, [progress, setState]);

  return (
    <button id="progress-btn">
      <span className="btn-text">
        Uploading... (Progress {progress}%) (Will make loader)
      </span>
    </button>
  )
}

export default ProgressButton;