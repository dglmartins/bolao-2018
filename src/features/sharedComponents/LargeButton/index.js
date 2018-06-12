import React from 'react';
import './LargeButton.css';

const LargeButton = (props) => (
  <button className={`large-button ${props.color}`}>
    {props.buttonText}
  </button>
);

export default LargeButton;
