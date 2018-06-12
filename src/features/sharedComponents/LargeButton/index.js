import React from 'react';
import './LargeButton.css';

const LargeButton = (props) => (
  <button className="large-button light-blue darken-1">
    {props.buttonText}
  </button>
);

export default LargeButton;
