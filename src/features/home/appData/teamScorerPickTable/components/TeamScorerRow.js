import React from 'react';
import './teamScorerRow.css'


const TeamScorerRow = (props) => {
  return (
    <tr onClick={props.handleSelect}>
      <td className="team-scorer-td">{props.topScorer}</td>
      <td className="team-scorer-td mid-align">{props.team}</td>
    </tr>
  )
};

export default TeamScorerRow
