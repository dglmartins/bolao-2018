import React from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';
import './groupView.css'

const GroupView = (props) => {
  return (
    <div>
      <div className="standings-title">Group Standings</div>
      {props.groupsNames.map((group) => (
        <GroupTable
          groupName={group} group={props.groups[group]}
          key={group}
          showScore={true}
          showPicker={false}
        />
      ))}
    </div>
  );
};

function mapStateToProps({ groups }) {
  return {
    groupsNames: Object.keys(groups).map((group) => (
      group
    )),
    groups
  }
}

export default connect(mapStateToProps)(GroupView);
