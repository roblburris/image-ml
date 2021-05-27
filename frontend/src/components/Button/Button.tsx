import React from 'react';
import { homePageState, progressState } from '../../types';
import UploadButton from './UploadButton';
import ProgressButton from './ProgressButton';

type ButtonProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
  
  setImageURL: React.Dispatch<React.SetStateAction<string>>,
  setLabel: React.Dispatch<React.SetStateAction<string>>,

  progress: number,
  setProgress: React.Dispatch<React.SetStateAction<number>>,
}

function Button({state, setState, setImageURL, setLabel, progress, setProgress}: ButtonProps) {
  return (
    <>

    {
      state === homePageState && (
        <UploadButton state={state} setState={setState} progress={progress} setProgress={setProgress} setImageURL={setImageURL} setLabel={setLabel}></UploadButton>
      )
    }

    {
      state === progressState && (
        <ProgressButton progress={progress}></ProgressButton>
      )
    }
    </>
  );
}

export default Button;