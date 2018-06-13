import React from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';

const GroupView = (props) => {
  console.log(props)
  return (
    <div>
      {props.groupsNames.map((group) => (
        <GroupTable
          groupName={group} group={props.groups[group]}
          key={group}
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
