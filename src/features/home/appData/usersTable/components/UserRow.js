import React from 'react';
import './userRow.css'
import { withRouter } from 'react-router-dom';


const UserRow = (props) => {

  return (
    <tr>
      <td className="user-td">{props.user.displayName}</td>
      <td className="user-td mid-align">{props.userPoints}</td>
    </tr>
  )
};

export default withRouter(UserRow)
