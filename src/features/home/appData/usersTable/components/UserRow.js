import React from 'react';
import './userRow.css'


const UserRow = (props) => {
  return (
    <tr onClick={props.handleSelect}>
      <td className="user-td">{props.userName}</td>
      <td className="user-td mid-align">{props.userPoints}</td>
    </tr>
  )
};

export default UserRow
