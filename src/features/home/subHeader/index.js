import React from 'react';
import './subHeader.css';
import { withRouter } from 'react-router-dom';

const SubHeader = (props) => {
  const navitageToStandings = () => {
    props.history.push('/home/groupStandings');
  }
  const navitageToRoundOnePicks = () => {
    props.history.push('/home/roundOnePicks');
  }
  return (
    <nav>
     <div>
       <ul style={{"width": "100%"}}>
         <li className="nav-link" onClick={navitageToRoundOnePicks}>My Picks</li>
         <li className="nav-link" onClick={navitageToStandings}>Group standings</li>
       </ul>
     </div>
   </nav>
  )
};

export default withRouter(SubHeader);
