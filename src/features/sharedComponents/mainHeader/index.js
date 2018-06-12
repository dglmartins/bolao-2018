import React from 'react';
import './mainHeader.css'

const MainHeader = (props) => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper blue darken-1">
        <div className="brand-logo left">Bolao da Copa</div>
        <ul className="hide-on-med-and-down right">
          <li><a>Sign In</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default MainHeader;
