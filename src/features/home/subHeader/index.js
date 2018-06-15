import React from 'react';
import './subHeader.css';
import { withRouter } from 'react-router-dom';

const SubHeader = (props) => {
  const navigateToStandings = () => {
    props.history.push(`/home/groupStandings/${props.uid}`);
  }
  const navigateToRoundOnePicks = () => {
    props.history.push('/home/roundOnePicks');
  }

  const navigateToBolaoStandings = () => {
    props.history.push('/home/bolaoStandings');
  }

  const navigateToRules = () => {
    props.history.push('/home/rules');
  }
  return (
   <table className="sub-header">
     <tbody>
       <tr>
         <td className="nav-link" onClick={navigateToRoundOnePicks}>
           Make Picks
         </td>
         <td className="nav-link" onClick={navigateToStandings}>
          My Current Picks
         </td>
         <td className="nav-link" onClick={navigateToBolaoStandings}>
           Bolao standings
         </td>
         <td className="nav-link" onClick={navigateToRules}>
           rules
         </td>
       </tr>


     </tbody>
   </table>
  )
};

export default withRouter(SubHeader);
