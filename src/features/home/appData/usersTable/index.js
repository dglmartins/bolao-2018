import React from 'react';
import UserRow from './components/UserRow';


import './usersTable.css'

const UsersTable = (props) => {

  return (
    <table className="user-table">
      <caption className="caption">Click user to see their group picks</caption>
      <tbody>
        <tr className="row">
          <th className="table-head">Name</th>
          <th className="table-head">points</th>
        </tr>
        {Object.keys(props.users).map((user) => (
          <UserRow
            user={props.users[user]}
            uid={user}
            userPoints={0}
            key={user}
          />
        ))}
      </tbody>


    </table>
  )

};

export default UsersTable
