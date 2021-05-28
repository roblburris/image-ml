import React from 'react';
import { backendPrefix, loadingState, progressState, resultsState } from '../types';

type fileSelectReturn = {
  imgURL: string,
  formData: FormData,
}

const uploadImage = async (progress: number, setProgress: React.Dispatch<React.SetStateAction<number>>, setState: React.Dispatch<React.SetStateAction<number>>, setImageURL: React.Dispatch<React.SetStateAction<string>>, setLabel: React.Dispatch<React.SetStateAction<string>>) => {
  // Get file
  const upload = document.createElement('input');
  upload.type = "file";
  upload.accept = "image/*";
  document.body.appendChild(upload)
  upload.click();
  const fileData = await new Promise<fileSelectReturn>(async (res, rej) => {
    const imgURL = await new Promise<string>((res, rej) => {
      upload.onchange = (ev) => {
        const reader = new FileReader();
        reader.onerror = (ev) => {
          rej(ev.target);
        }
  
        reader.onload = (ev) => {
          if (ev.target!.result) {
            res(ev.target!.result as string);
          }
        }
  
        reader.readAsDataURL(upload.files![0])
      }
    })

    let formData = new FormData();
    formData.append("ml-image", upload.files![0]);

    res({
      imgURL: imgURL,
      formData: formData,
    });
  });

  // Process
  setImageURL(fileData.imgURL);
  await new Promise<void>((res, _) => {
    setTimeout(() => {
      res();
    }, 500)
  }) // So that animations work

  setState(progressState);

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

  // Wait for server to process

  // For button animation
  setProgress(120);
  await new Promise<void>((res, _) => {
    setTimeout(() => {
      res();
    }, 500)
  })

  setState(loadingState);
  await new Promise<void>((res, _) => {
    // Make this wait for request
    setTimeout(() => {
      res();
    }, 1000)
  })

  // Get results from request
  setLabel("Dog");
  setState(resultsState);
}

export default uploadImage;