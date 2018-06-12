import React from 'react';
import './mainHeader.css';

const MainHeader = (props) => (
  <header className="main-header">
    {props.children}
  </header>
);

export default MainHeader;
