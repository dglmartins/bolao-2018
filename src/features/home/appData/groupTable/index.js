import React from 'react';
import TeamRow from './components/TeamRow';


import './groupTable.css'

const GroupTable = (props) => {

  const handleSelect = (e) => {
    console.log(e.target)
  }
  console.log(Object.keys(props.group))
  return (
    <table className="group-table">
      <caption>{`Group ${props.groupName}`}</caption>
      <tbody>
        <tr>
          <th colSpan="2">Team</th>
          <th>points</th>
        </tr>

        {Object.keys(props.group).map((team) => (
          <TeamRow
            teamName={team}
            teamPoints={0}
            handleSelect={handleSelect}
            key={team}
          />
        ))}
      </tbody>


    </table>
  )

};

export default GroupTable
