import React from 'react';
import { withRouter } from 'react-router-dom';
import './signIn.css';
import ViewNavLink from '../../sharedComponents/viewNavLink';
import LargeButton from '../../sharedComponents/LargeButton';

const SignIn = (props) => (
  <div>
    <form name="signin" onSubmit={props.signIn}>
      <div className="login-fields-container blue-grey lighten-4">
        <input
          name="signInInput"
          className="bolao-copa-input"
          type="text"
          placeholder={props.signInInputPlaceholder}
          value={props.signInInput}
          onFocus={props.updatePlaceholder}
          onBlur={props.updatePlaceholder}
          onChange={props.updateInput}
        />
        <input
          name="passwordInput"
          className="bolao-copa-input"
          type="password"
          placeholder={props.passwordInputPlaceholder}
          value={props.passwordInput}
          onFocus={props.updatePlaceholder}
          onBlur={props.updatePlaceholder}
          onChange={props.updateInput}
        />
      </div>
      <ViewNavLink navTitle="Forgot Password?" handleClick={props.navigateToResetPassword}/>
      <LargeButton buttonText="Sign In" color="light-blue darken-1"/>
    </form>
    <br></br>
    <LargeButton
      buttonText="Create New Account"
      color="red accent-4"/>
  </div>
);

//todo optimize re renders
export default withRouter(SignIn);
