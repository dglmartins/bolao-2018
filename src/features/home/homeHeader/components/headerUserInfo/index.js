import React from 'react';
import './headerUserInfo.css'

const HeaderUserInfo = (props) => (
  <div className="current-user-info" onClick={props.handleClick}>
    <p>{props.title}</p>  
  </div>
);

export default HeaderUserInfo;
