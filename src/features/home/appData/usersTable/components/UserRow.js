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
      <td className="user-td mid-align">{props.userPoints}</td>
    </tr>
  )
};

export default withRouter(UserRow)
