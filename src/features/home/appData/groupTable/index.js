import React from 'react';
import TeamRow from './components/TeamRow';
import { sortByFIFAOrder } from '../../../services/utils/helpers';


import './groupTable.css';
// const R = require('ramda');

const GroupTable = (props) => {
  const orderedGroupArray = sortByFIFAOrder(props.group)

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
            <th
              className="table-head-narrow">MP
            </th>
          )}
          {props.showScore && (
            <th
              className="table-head-narrow">W
            </th>
          )}
          {props.showScore && (
            <th
              className="table-head-narrow">D
            </th>
          )}
          {props.showScore && (
            <th
              className="table-head-narrow">L
            </th>
          )}
          {props.showScore && (
            <th
              className="table-head-narrow">GF
            </th>
          )}
          {props.showScore && (
            <th
              className="table-head-narrow">GA
            </th>
          )}
          {props.showScore && (
            <th
              className="table-head-narrow">GD
            </th>
          )}
          {props.showScore && (
            <th
              className="table-head-narrow">Pts
            </th>
          )}

        </tr>
        {!props.type && orderedGroupArray.map((teamStats) => (
          <TeamRow
            groupName={props.groupName}
            teamName={teamStats.team}
            teamStats={teamStats}
            handleSelect={handleSelect}
            key={teamStats.team}
            showScore={props.showScore}
            myPicks={props.myPicks}
          />
        ))}
        {(props.type === "picks") && Object.keys(props.picks).map((pick) => (
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
