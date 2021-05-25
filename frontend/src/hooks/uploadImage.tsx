import React from 'react';
import { resultsState } from '../types';

const uploadImage = async (progress: number, setProgress: React.Dispatch<React.SetStateAction<number>>, setState: React.Dispatch<React.SetStateAction<number>>, setImageURL: React.Dispatch<React.SetStateAction<string>>, setLabel: React.Dispatch<React.SetStateAction<string>>) => {
  while (progress <= 100) {
    await new Promise<void>((res, _) => {
      // Make this the request handler instead of setTimeout handler
      setTimeout(() => {
        res();
      }, 500)
    })

    progress += 10;
    setProgress(progress);
  }
  
  setState(resultsState);

  // Get results from request
  setImageURL("https://i.pinimg.com/originals/bf/86/8c/bf868cc98ab5f73a8ae5fe762eb17a17.jpg");
  setLabel("Dog");
}

export default uploadImage;