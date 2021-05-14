import React from 'react';
import './Button.css';

function UploadButton() {
  return (
    <button>
      <span className="btn-text">
        <i className="fa fa-upload"></i>&nbsp;
        Upload
      </span>
    </button>
  );
}

export default UploadButton;