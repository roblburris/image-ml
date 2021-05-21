import React from 'react';
import { homePageState, progressState } from '../../types';
import UploadButton from './UploadButton';
import ProgressButton from './ProgressButton';

type ButtonProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
  
  setImageURL: React.Dispatch<React.SetStateAction<string>>,
  setLabel: React.Dispatch<React.SetStateAction<string>>,
}

function Button({state, setState, setImageURL, setLabel}: ButtonProps) {
  return (
    <>

    {
      state === homePageState && (
        <UploadButton state={state} setState={setState}></UploadButton>
      )
    }

    {
      state === progressState && (
        <ProgressButton setState={setState} state={state} setImageURL={setImageURL} setLabel={setLabel}></ProgressButton>
      )
    }
    </>
  );
}

export default Button;