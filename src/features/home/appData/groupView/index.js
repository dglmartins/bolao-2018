import React from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';
import './groupView.css';
import TeamScorerPickTable from '../teamScorerPickTable';
import Round16Picks from '../round16Picks';
import QuarterPicks from '../quarterPicks';

const GroupView = (props) => {
  const {users, uid, status} = props;
  return (
    <div>

      {users[uid] && (
        <div className="standings-title">{`Picks - ${users[uid].displayName}`}</div>
      )}
      {users[uid] && users[uid].quarterPicks && (
        <QuarterPicks
          quarterPicks={users[uid].quarterPicks} showPicker={false}
          showPicks={!status.quarterPicksOpen}
        />
      )}
      {users[uid] && users[uid].round16Picks && (
        <Round16Picks
          round16Picks={users[uid].round16Picks} showPicker={false}
          showPicks={!status.round16PicksOpen}
        />
      )}

      <div className="pick-status">Group Picks:</div>

      {props.groupsNames.map((group) => (
        <div key={group}>
          <div className="legend-container">
            <div className="legend first">
              1st place pick
            </div>
            <div className="legend second">
              2nd place pick
            </div>
          </div>
          {users[uid] && users[uid].roundOnePicks && (
            <GroupTable
              groupName={group}
              group={props.groupsStats[group]}
              showScore={true}
              myPicks={users[uid].roundOnePicks[group]}
            />
          )}
        </div>

      ))}
      {users[uid] && users[uid].roundOnePicks && (
        <TeamScorerPickTable topScorerPick={users[uid].topScorerPick}
        teamPick={users[uid].teamPick}/>
      )}


    </div>
  );
};

function mapStateToProps({ groupsStats, users, status }) {

  return {
    groupsNames: Object.keys(groupsStats).map((group) => (
      group
    )),
    groupsStats,
    users,
    status
  }
}

export default connect(mapStateToProps)(GroupView);
