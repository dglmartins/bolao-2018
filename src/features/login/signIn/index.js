import React from 'react';
import './signIn.css';
import ViewNavLink from '../../sharedComponents/viewNavLink';
import LargeButton from '../../sharedComponents/LargeButton';

const SignIn = (props) => (
  <div>
    <form name="signin" onSubmit={props.signIn}>
      <div className="login-fields-container grey lighten-5">
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
      <ViewNavLink navTitle="Esqueceu sua senha?" handleClick={props.navigateToResetPassword}/>
      <LargeButton buttonText="Entrar" color="light-blue darken-1"/>
    </form>
    <br></br>
    <LargeButton
      buttonText="Cadastre-se"
      color="red accent-4"/>
  </div>
);

//todo optimize re renders
export default SignIn;
