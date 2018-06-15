import React from 'react';
import TeamRow from './components/TeamRow';

import './groupTable.css';
// const R = require('ramda');

const GroupTable = (props) => {

  // const groupArray = Object.keys(props.group).map((team) => (
  //   {[team]: {points: props.group[team]}}
  // ));
  //
  //  const sortedArray = R.sortWith([R.descend(R.prop('points'))])(groupArray);

   // console.log(sortedArray);

  // const sortedGroupArray =

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
        {!props.type && Object.keys(props.group).map((team) => (
          <TeamRow
            groupName={props.groupName}
            teamName={team}
            teamPoints={props.group[team]}
            handleSelect={handleSelect}
            key={team}
            showScore={props.showScore}
          />
        ))}
        {(props.type == "picks") && Object.keys(props.picks).map((pick) => (
          <TeamRow
            groupName={props.groupName}
            teamName={props.picks[pick]}
            handleSelect={handleSelect}
            key={pick}
            showScore={false}
          />
        ))}
      </tbody>


    </table>
  )

};

export default GroupTable
