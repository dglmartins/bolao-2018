import React from 'react';
import UserRow from './components/UserRow';


import './usersTable.css'

const UsersTable = (props) => {
  console.log(props)

  return (
    <table className="user-table">
      <caption className="caption">Click any user to see their closed picks</caption>
      <tbody>
        <tr className="row">
          <th className="table-head">Name</th>
          <th className="table-head">Total Points</th>
          <th className="table-head">Round 16 Pts</th>
          <th className="table-head">Group Pts</th>
        </tr>
        {props.users.map((user) => (
          <UserRow
            user={user}
            uid={user.uid}
            round16Points={user.round16Points}
            groupStagePoints={user.groupStagePoints}
            totalPoints={user.totalPoints}
            key={user.uid}
          />
        ))}
      </tbody>


    </table>
  )

};

export default UsersTable
