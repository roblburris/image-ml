import React from 'react';
import { resultsState } from '../types';

const uploadImage = async (progress: number, setProgress: React.Dispatch<React.SetStateAction<number>>, setState: React.Dispatch<React.SetStateAction<number>>) => {
  while (progress !== 100) {
    await new Promise<void>((res, _) => {
      setTimeout(() => {
        res();
      }, 1000)
    })

    setProgress(progress + 10);
  }
  
  setState(resultsState);
}

export default uploadImage;