import React from 'react';
import { connect } from 'react-redux';
import UsersTable from '../usersTable';

const UsersView = (props) => {
  return (
    <div>
      <UsersTable
        users={props.users}
      />
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(UsersView);
