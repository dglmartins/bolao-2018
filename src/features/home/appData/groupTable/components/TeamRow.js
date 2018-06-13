import React from 'react';


const TeamRow = (props) => {
  console.log(props)
  return (
    <tr>
      <td>
        <img src={props.teamImg} alt={props.teamName} height="80" width="80"/>
      </td>
      <td>{props.teamName}</td>
      <td>{props.teamPoints}</td>
    </tr>
  )
};

export default TeamRow
