import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';
import RoundOnePicker from '../roundOnePicker';

class RoundOnePicks extends Component {
  render() {
    return (
      <div>
        {this.props.groupsNames.map((group) => (
          <div key={group}>
            <RoundOnePicker
              roundOnePicks={this.props.roundOnePicks[group]}
              groupName={group}
              group={this.props.groups[group]}
            />
            <GroupTable
              groupName={group} group={this.props.groups[group]}
              showScore={false}
            />
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ groups }) {
  return {
    groupsNames: Object.keys(groups).map((group) => (
      group
    )),
    groups
  }
}

export default connect(mapStateToProps)(RoundOnePicks);
