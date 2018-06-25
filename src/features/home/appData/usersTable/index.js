import React from 'react';
import UserRow from './components/UserRow';


import './usersTable.css'

const UsersTable = (props) => {

  return (
    <table className="user-table">
      <caption className="caption">Click any user to see their closed picks</caption>
      <tbody>
        <tr className="row">
          <th className="table-head">Name</th>
          <th className="table-head">points</th>
        </tr>
        {props.users.map((user) => (
          <UserRow
            user={user}
            uid={user.uid}
            groupStagePoints={user.groupStagePoints}
            key={user.uid}
          />
        ))}
      </tbody>


    </table>
  )

};

export default UsersTable
