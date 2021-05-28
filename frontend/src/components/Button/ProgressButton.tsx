import React, { useEffect } from 'react';
import './Button.css';

const getProgressStyles = (progress: number): React.CSSProperties => {
  return {
    backgroundColor: "#3286E9",
    borderRadius: "100vw",
    width: `${progress}%`,
    height: "30px",
    minWidth: `${50}px`,
    minHeight: "30px",
    transitionDuration: "0.5s",
    padding: "0.2em 0",
    position: "relative",
    left: "0",
    opacity: 100,
  } 
}

type ProgressBtnProps = {
  progress: number,
}

function ProgressButton({progress}: ProgressBtnProps) {

  useEffect(() => {
    document.getElementById("progress-btn")?.classList.add("progress-btn");

    if (progress > 100) {
      document.getElementById("progress-btn")?.classList.remove("progress-btn");
      document.getElementById("progress-btn")?.setAttribute("style", "width: 10vw; position: relative; left: 5vw; width: 0; opacity: 0;");
      document.getElementById("progress-cnt")?.setAttribute("style", "");
    }
  }, [progress]);

  return (
    <div id="progress-btn" className="button">
      <div id="progress-cnt" style={getProgressStyles(progress)}/> 
    </div>
  )
}

export default ProgressButton;