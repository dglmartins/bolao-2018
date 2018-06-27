import React from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';
import './groupView.css';
import { withRouter } from 'react-router-dom';
import TeamScorerPickTable from '../teamScorerPickTable';
import Round16Picks from '../round16Picks';

const GroupView = (props) => {
  const {users, user, uid} = props;
  console.log(props)
  return (
    <div>

      {users[uid] && (
        <div className="standings-title">{`Picks - ${users[uid].displayName}`}</div>
      )}

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

      {users[uid] && users[uid].round16Picks && (
        <Round16Picks
          round16Picks={users[uid].round16Picks} showPicker={false}
        />
      )}
    </div>
  );
};

function mapStateToProps({ groupsStats, user, users }) {

  return {
    groupsNames: Object.keys(groupsStats).map((group) => (
      group
    )),
    groupsStats,
    users,
    user
  }
}

export default connect(mapStateToProps)(GroupView);
