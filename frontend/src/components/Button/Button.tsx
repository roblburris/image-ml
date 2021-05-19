import React from 'react';
import { homePageState, progressState } from '../../types';
import UploadButton from './UploadButton';
import ProgressButton from './ProgressButton';

type ButtonProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
}

function Button({state, setState}: ButtonProps) {
  return (
    <>

    {
      state === homePageState && (
        <UploadButton state={state} setState={setState}></UploadButton>
      )
    }

    {
      state === progressState && (
        <ProgressButton state={state} setState={setState}></ProgressButton>
      )
    }
    </>
  );
}

export default Button;