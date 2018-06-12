import React from 'react';
import './headerUserContainer.css'

const HeaderUserContainer = (props) => (
  <div className="current-user-container">
    {props.children}
  </div>
);

export default HeaderUserContainer;
