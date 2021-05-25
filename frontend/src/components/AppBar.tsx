import React from 'react';
import './AppBar.css';
import logo from '../images/logo.png';

function AppBar() {
  return (
    <div className="appbar">
      <img src={logo} alt="logo"></img>
      ImageML
    </div>
  )
}

export default AppBar;