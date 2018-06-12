import React from 'react';
import './mainHeader.css';

const MainHeader = (props) => (
  <header className="main-header red accent-4">
    {props.children}
  </header>
);

export default MainHeader;
