import React from 'react';
import UserRow from './components/UserRow';


import './usersTable.css'

const UsersTable = (props) => {

  const handleSelect = (e) => {
    console.log(e.target)
  }
  return (
    <table className="group-table">
      <caption>Bolao Standings</caption>
      <tbody>
        <tr className="row">
          <th className="table-head">Name</th>
          <th className="table-head">points</th>
        </tr>
        {Object.keys(props.users).map((user) => (
          <UserRow
            userName={props.users[user].displayName}
            userPoints={0}
            handleSelect={handleSelect}
            key={user}
          />
        ))}
      </tbody>


    </table>
  )

};

export default UsersTable
