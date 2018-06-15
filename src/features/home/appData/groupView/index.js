import React from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';
import './groupView.css';

const GroupView = (props) => {
  return (
    <div>
      <div className="standings-title">Group Standings</div>
      {props.groupsNames.map((group) => (
        <GroupTable
          groupName={group}
          group={props.groupsStats[group]}
          key={group}
          showScore={true}
        />
      ))}
    </div>
  );
};

function mapStateToProps({ groupsStats }) {
  return {
    groupsNames: Object.keys(groupsStats).map((group) => (
      group
    )),
    groupsStats
  }
}

export default connect(mapStateToProps)(GroupView);
