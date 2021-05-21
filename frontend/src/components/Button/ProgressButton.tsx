import React, { useEffect, useState } from 'react';
import './Button.css';
import uploadImage from '../../hooks/uploadImage';

const getProgressStyles = (progress: number) => {
  return {
    backgroundColor: "#3286E9",
    borderRadius: "100vw",
    width: `${progress}%`,
    height: "30px",
    minWidth: `${50}px`,
    minHeight: "30px",
    transitionDuration: "0.5s",
    padding: "0.2em 0",
  } 
}

type ProgressBtnProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
}

function ProgressButton({state, setState}: ProgressBtnProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.getElementById("progress-btn")?.classList.add("progress-btn");
    
    uploadImage(progress, setProgress, setState);
  }, []);

  return (
    <div id="progress-btn" className="button">
      <div style={getProgressStyles(progress)}/> 
    </div>
  )
}

export default ProgressButton;