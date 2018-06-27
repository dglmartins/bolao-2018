import React from 'react';
// import TeamRow from './components/TeamRow';
// import { sortByFIFAOrder } from '../../../services/utils/helpers';
import './gameTable.css'
import { getCountryStyle } from '../../../services/utils/helpers';



const GameTable = (props) => {
  const styleOne = getCountryStyle(props.game.team1)
  const styleTwo = getCountryStyle(props.game.team2)

  return (
    <table className="group-table">
      <caption className="caption">{props.game.gameTime}</caption>
      <tbody>
        <tr className="row">
          <th className="table-head" colSpan="2">Team 1</th>
          <th
            className="table-head-narrow">Score
          </th>
          <th
            className="table-head-narrow">
          </th>
          <th
            className="table-head-narrow">Score
          </th>
          <th className="table-head" colSpan="2">Team 2</th>


        </tr>
        <tr>
          <td className="flag-td" style={styleOne}></td>
          <td className="name-td">{props.game.team1}</td>
          {!props.picks.set
            ?
            <td className="score-td">-</td>
            :
            <td className="score-td">{props.picks.team1Score}</td>
          }
          <td className="x-td">X</td>
          {!props.picks.set
            ?
            <td className="score-td">-</td>
            :
            <td className="score-td">{props.picks.team2Score}</td>
          }

          <td className="name-right-td">{props.game.team2}</td>
          <td className="flag-td" style={styleTwo}></td>
        </tr>

        {/* {!props.type && orderedGroupArray.map((teamStats) => (
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
        {(props.type == "picks") && Object.keys(props.picks).map((pick) => (
          <TeamRow
            groupName={props.groupName}
            teamName={props.picks[pick]}
            handleSelect={handleSelect}
            key={pick}
            showScore={false}
          />
        ))} */}
      </tbody>
    </table>
  )

};

export default GameTable;
