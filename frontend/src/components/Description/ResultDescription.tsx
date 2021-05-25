import React, { useEffect } from 'react';
import './Description.css';

type ResultDescriptionProps = {
  imageURL: string,
  label: string,
}

function ResultDescription({imageURL, label}: ResultDescriptionProps) {
  useEffect(() => {
    let el = document.getElementById("result-img");
    setTimeout(() => {
      if (el) {
        el.style.height = "50vh";
      }
    }, 0)
  });

  return (
    <img className="result-img" src={imageURL} alt={label} id="result-img"></img>
  )
}

export default ResultDescription;
