import React from 'react';
import { connect } from 'react-redux';
import UsersTable from '../usersTable';
import { curriedPoints } from '../../../services/utils/helpers';
import * as _ from 'ramda';

const UsersView = (props) => {

  return (
    <div>
      <UsersTable
        users={props.users}
      />
    </div>
  );
};

function mapStateToProps({ users, status }) {
  // console.log(_.map(curriedPoints(status.groupStagePicks), users))
  const usersWithPoints = (_.map(curriedPoints(status.groupStagePicks, status.round16Results, status.quarterResults, status.semiResults), users))
  const usersWithPointsArray = Object.keys(usersWithPoints).map((uid) => (
    _.merge(usersWithPoints[uid], {uid})
  ))
  const orderUsers =  _.sortWith([
    _.descend(_.prop('totalPoints')),
    _.ascend(_.prop('displayName'))
  ])

  const orderedUsers = orderUsers(usersWithPointsArray)

  return {
    users: orderedUsers
  }
}

export default connect(mapStateToProps)(UsersView);
