import React from 'react';
import { withRouter } from 'react-router-dom';
import './resetPass.css';
import ViewNavLink from '../../sharedComponents/viewNavLink';
import LargeButton from '../../sharedComponents/LargeButton';

const ResetPass = (props) => (
  <form name="reset" onSubmit={props.resetPass}>
    <div className="recovery-fields-container blue-grey lighten-4">
      <input
        name="passResetInput"
        type="text"
        placeholder={props.passResetInputPlaceholder}
        onFocus={props.updatePlaceholder}
        onBlur={props.updatePlaceholder}
        onChange={props.updateInput}
        value={props.passResetInput}
      />
    </div>
    <ViewNavLink navTitle="Back to sign in" handleClick={props.navigateToLogIn}/>
    <LargeButton buttonText="Reset Password"/>

  </form>
);

export default withRouter(ResetPass);

//todo optimize rerenders
