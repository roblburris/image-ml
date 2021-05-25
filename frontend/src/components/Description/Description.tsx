import React from 'react';
import { homePageState, progressState, resultsState } from '../../types';
import NormalDescription from './NormalDescription';
import ResultDescription from './ResultDescription';

type DescriptionProps = {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
  imageURL: string,
  label: string,
}

function Description({state, setState, imageURL, label}: DescriptionProps) {
  return (
    <>

    {
      (state === homePageState || state === progressState) && (
        <NormalDescription/>
      )
    }

    {
      state === resultsState && (
        <ResultDescription imageURL={imageURL} label={label}/>
      )
    }
    </>
  );
}

export default Description;