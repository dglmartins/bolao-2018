import React from 'react';
import { withRouter } from 'react-router-dom';
import './signIn.css';
import ViewNavLink from '../../sharedComponents/viewNavLink';
import LargeButton from '../../sharedComponents/LargeButton';

const SignIn = (props) => (
  <div>
    <form name="signin" onSubmit={props.onSubmit}>
      <div className="login-fields-container grey lighten-5">
        <input
          name="signInInput"
          className="bolao-copa-input"
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
          className="bolao-copa-input"
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
            className="bolao-copa-input"
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
          <ViewNavLink navTitle="Voltar para login" handleClick={props.navigateToLogIn}/>
          <LargeButton buttonText="Cadastre-se" color="light-blue darken-1"/>
        </div>

      ) : (
        <div>
          <ViewNavLink navTitle="Esqueceu sua senha?" handleClick={props.navigateToResetPassword}/>
          <LargeButton buttonText="Entrar" color="light-blue darken-1"/>
          <ViewNavLink navTitle="Cadastre-se" handleClick={props.navigateToCreateUser}/>
        </div>
      )}
    </form>
    <br></br>
  </div>
);

//todo optimize re renders
export default withRouter(SignIn);
