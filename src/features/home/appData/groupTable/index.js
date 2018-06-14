import React from 'react';
import TeamRow from './components/TeamRow';


import './groupTable.css'

const GroupTable = (props) => {

  const handleSelect = (e) => {
    console.log(e.target)
  }
  return (
    <table className="group-table">
      <caption className="caption">{`Group ${props.groupName}`}</caption>
      <tbody>
        <tr className="row">
          <th className="table-head" colSpan="2">Team</th>
          {props.showScore && (
            <th className="table-head">points</th>
          )}
        </tr>
        {Object.keys(props.group).map((team) => (
          <TeamRow
            teamName={team}
            teamPoints={0}
            handleSelect={handleSelect}
            key={team}
            showScore={props.showScore}
          />
        ))}
      </tbody>


    </table>
  )

};

export default GroupTable
