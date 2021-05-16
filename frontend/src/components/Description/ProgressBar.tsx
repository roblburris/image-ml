import React from 'react'
import './Description.css';

const getProgressStyles = (progress: number) => { //Take a number and calculate the styles in the progress bar

    return {
        backgroundColor: "#3286E9",
        borderRadius: "100vw",
        width: `${progress}%`,
        height: "30px",
        minWidth: `${50}px`,
        minHeight: "30px"
    
    } 
}

function ProgressBar() {
    return (
        <div className="progress">
            <div style={getProgressStyles(50)}/> 
        </div>
    )
}

export default ProgressBar
