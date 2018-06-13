import React from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';
import RoundOnePicker from '../roundOnePicker';

const RoundOnePicks = (props) => {
  return (
    <div>
      {props.groupsNames.map((group) => (
        <div key={group}>
          <GroupTable
            groupName={group} group={props.groups[group]}
            showScore={false}
          />
          <RoundOnePicker/>
        </div>
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
