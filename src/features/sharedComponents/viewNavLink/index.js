import React from 'react';
import './viewNavLink.css';

const ViewNavLink = (props) => (
  <div className="view-nav-link" onClick={props.handleClick}>
    {props.navTitle}
  </div>
);

export default ViewNavLink;
