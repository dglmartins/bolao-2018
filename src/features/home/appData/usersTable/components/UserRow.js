import React from 'react';
import './userRow.css'
import { withRouter } from 'react-router-dom';


const UserRow = (props) => {
  const handleClick = (uid) => {
    props.history.push(`/home/groupStandings/${uid}`)
  }

  return (
    <tr onClick={() => handleClick(props.uid)}>
      <td className="user-td">{props.user.displayName}</td>
      <td className="user-td mid-align bold-italic">{props.totalPoints}</td>
      <td className="user-td mid-align" >{props.semiPoints}</td>
      <td className="user-td mid-align" >{props.quarterPoints}</td>
      <td className="user-td mid-align">{props.round16Points}</td>
      <td className="user-td mid-align">{props.groupStagePoints}</td>
    </tr>
  )
};

export default withRouter(UserRow)
