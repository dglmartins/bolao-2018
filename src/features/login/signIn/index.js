import React from 'react';
import { withRouter } from 'react-router-dom';
import './signIn.css';
import ViewNavLink from '../../sharedComponents/viewNavLink';
import LargeButton from '../../sharedComponents/LargeButton';

const SignIn = (props) => (
  <div>
    <form name="signin" onSubmit={props.onSubmit}>
      <div className="login-fields-container">
        <input
          name="signInInput"
          className="login-input"
          type="text"
          required="required"
          placeholder={props.signInInputPlaceholder}
          value={props.signInInput}
          onFocus={props.updatePlaceholder}
          onBlur={props.updatePlaceholder}
          onChange={props.updateInput}
        />
        <input
          name="passwordInput"
          className="login-input"
          type="password"
          required="required"
          placeholder={props.passwordInputPlaceholder}
          value={props.passwordInput}
          onFocus={props.updatePlaceholder}
          onBlur={props.updatePlaceholder}
          onChange={props.updateInput}
        />
        {props.creatingUser && (
          <input
            name="nameInput"
            className="login-input"
            required="required"
            type="text"
            placeholder={props.nameInputPlaceholder}
            value={props.nameInput}
            onFocus={props.updatePlaceholder}
            onBlur={props.updatePlaceholder}
            onChange={props.updateInput}
          />
        )}

      </div>
      {props.creatingUser ? (
        <div>
          <ViewNavLink navTitle="Back to login" handleClick={props.navigateToLogIn}/>
          <LargeButton buttonText="Create Account" color="blue-class"/>
        </div>

      ) : (
        <div>
          <ViewNavLink navTitle="forgot your password?" handleClick={props.navigateToResetPassword}/>
          <LargeButton buttonText="Sign In" color="red-class"/>
          <ViewNavLink navTitle="Create Account" handleClick={props.navigateToCreateUser}/>
        </div>
      )}
    </form>
    <br></br>
  </div>
);

//todo optimize re renders
export default withRouter(SignIn);
