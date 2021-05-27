import React from 'react';
import './CenterWrapper.css';

import Button from './Button/Button';
import Description from './Description/Description';
import { resultsState } from '../types';

type CenterWrapperProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,

  imageURL: string,
  setImageURL: React.Dispatch<React.SetStateAction<string>>,

  label: string,
  setLabel: React.Dispatch<React.SetStateAction<string>>,

  progress: number,
  setProgress: React.Dispatch<React.SetStateAction<number>>,
}

function CenterWrapper({state, setState, imageURL, setImageURL, label, setLabel, progress, setProgress}: CenterWrapperProps) {
  return (
    // Should conditionally render UploadButton (import Progress and stuff from button folder)
    // Should conditionall render Description (normally do normal, but use the image one when processed)
    <div className="CenterWrapper">
      <h1>ImageML</h1>
      <Description state={state} setState={setState} imageURL={imageURL} label={label}/>

      <Button setState={setState} state={state} setImageURL={setImageURL} setLabel={setLabel} progress={progress} setProgress={setProgress}/> 

      {
        state === resultsState && (
          <p>Label: <span className="result-text">{label}</span></p>
        )
      }
    </div>
  );
}

export default CenterWrapper;