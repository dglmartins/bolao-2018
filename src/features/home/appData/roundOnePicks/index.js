import React from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';

const RoundOnePicks = (props) => {
  return (
    <div>
      {props.groupsNames.map((group) => (
        <GroupTable
          groupName={group} group={props.groups[group]}
          key={group}
          showScore={false}
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

export default connect(mapStateToProps)(RoundOnePicks);
