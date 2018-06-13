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
   <div className="sub-header">
     <div className="nav-link" onClick={navitageToRoundOnePicks}>My Picks</div>
     <div className="nav-link" onClick={navitageToStandings}>Group standings</div>
   </div>
  )
};

export default withRouter(SubHeader);
