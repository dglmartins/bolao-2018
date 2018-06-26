import React from 'react';
import './smallButton.css';

const SmallButton = (props) => (
  <button className={`small-button ${props.color}`}>
    {props.buttonText}
  </button>
);

export default SmallButton;
