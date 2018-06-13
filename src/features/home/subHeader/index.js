import React from 'react';
import './subHeader.css';
import { withRouter } from 'react-router-dom';

const SubHeader = (props) => {
  const navitageToStandings = () => {
    props.history.push('/home/groupStandings');
  }
  return (
    <nav>
     <div class="nav-wrapper">
       <ul style={{"width": "100%"}}>
         <li className="nav-link">Meus Picks</li>
         <li className="nav-link" onClick={navitageToStandings}>Grupos</li>
       </ul>
     </div>
   </nav>
  )
};

export default withRouter(SubHeader);
