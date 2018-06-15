import React from 'react';
import TeamScorerRow from './components/TeamScorerRow';
import './teamScorerPickTable.css'

const TeamScorerPickTable = (props) => {

  const handleSelect = (e) => {
    console.log(e.target)
  }
  return (
    <table className="team-scorer-table">
      <caption className="team-scorer-caption">Bonus Stage One Picks</caption>
      <tbody>
        <tr className="team-scorer-row">
          <th className="team-scorer-table-head">Top Scorer</th>
          <th className="team-scorer-table-head">Best Stage 1 Campaign</th>
        </tr>

        <TeamScorerRow
          topScorer={props.extraPicks.topScorer}
          team={props.extraPicks.team}
          handleSelect={handleSelect}
        />

      </tbody>


    </table>
  )

};

export default TeamScorerPickTable
