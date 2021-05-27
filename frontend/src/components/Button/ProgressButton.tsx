import React, { useEffect } from 'react';
import './Button.css';

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
  progress: number,
}

function ProgressButton({progress}: ProgressBtnProps) {

  useEffect(() => {
    document.getElementById("progress-btn")?.classList.add("progress-btn");
  }, []);

  return (
    <div id="progress-btn" className="button">
      <div style={getProgressStyles(progress)}/> 
    </div>
  )
}

export default ProgressButton;