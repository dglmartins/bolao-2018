import React from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';
import './groupView.css';

const GroupView = (props) => {
  return (
    <div>
      <div className="standings-title">Group Standings</div>

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

          <GroupTable
            groupName={group}
            group={props.groupsStats[group]}
            showScore={true}
            myPicks={props.roundOnePicks[group]}
          />
        </div>

      ))}
    </div>
  );
};

function mapStateToProps({ groupsStats, roundOnePicks }) {
  return {
    groupsNames: Object.keys(groupsStats).map((group) => (
      group
    )),
    groupsStats,
    roundOnePicks
  }
}

export default connect(mapStateToProps)(GroupView);
