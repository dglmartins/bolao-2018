import React from 'react';
import './smallButton.css';

const SmallButton = (props) => (
  <button className={`small-button ${props.color}`} onClick={props.handleClick}>
    {props.buttonText}
  </button>
);

export default SmallButton;
