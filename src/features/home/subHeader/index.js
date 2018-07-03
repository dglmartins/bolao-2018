import React from 'react';
import './subHeader.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const SubHeader = (props) => {
  const navigateToStandings = () => {
    props.history.push(`/home/groupStandings/${props.uid}`);
  }
  const navigateToRoundOnePicks = () => {
    props.history.push('/home/roundOnePicks');
  }

  const navigateToRound16Picks = () => {
    props.history.push('/home/round16Picks');
  }

  const navigateToQuarterPicks = () => {
    props.history.push('/home/quarterPicks');
  }

  const navigateToSemiPicks = () => {
    props.history.push('/home/semiPicks');
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
         {props.status.pickStage === "group" && (
           <td className="nav-link" onClick={navigateToRoundOnePicks}>
             Make Picks
           </td>
         )}
         {props.status.pickStage === "round16" && (
           <td className="nav-link" onClick={navigateToRound16Picks}>
             Make Picks
           </td>
         )}
         {props.status.pickStage === "quarter" && (
           <td className="nav-link" onClick={navigateToQuarterPicks}>
             Make Picks
           </td>
         )}
         {props.status.pickStage === "semi" && (
           <td className="nav-link" onClick={navigateToSemiPicks}>
             Make Picks
           </td>
         )}

         <td className="nav-link" onClick={navigateToStandings}>
          My Current Picks
         </td>
         <td className="nav-link" onClick={navigateToBolaoStandings}>
           Bolao Points/Picks
         </td>
         <td className="nav-link" onClick={navigateToRules}>
           rules
         </td>
       </tr>


     </tbody>
   </table>
  )
};

function mapStateToProps({ status }) {
  return {
    status
  }
}

export default withRouter(connect(mapStateToProps)(SubHeader));
