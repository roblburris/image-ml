import React, { useEffect } from 'react';
import { resultsState } from '../types';

const useUploadImage = async (progress: number, setProgress: React.Dispatch<React.SetStateAction<number>>, setState: React.Dispatch<React.SetStateAction<number>>) => {
  useEffect(() => {
    console.log("aaaa");
  })

  progress += 10;
  setProgress(progress);
  if (progress !== 100) {
    setTimeout(useUploadImage, 200);
  } else {
    setState(resultsState);
  }
}

export default useUploadImage;