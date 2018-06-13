import React from 'react';
import './resetPass.css';
import ViewNavLink from '../../sharedComponents/viewNavLink';
import LargeButton from '../../sharedComponents/LargeButton';

const ResetPass = (props) => (
  <form name="reset" onSubmit={props.resetPass}>
    <div className="recovery-fields-container">
      <input
        className="login-input"
        name="passResetInput"
        type="text"
        placeholder={props.passResetInputPlaceholder}
        onFocus={props.updatePlaceholder}
        onBlur={props.updatePlaceholder}
        onChange={props.updateInput}
        value={props.passResetInput}
      />
    </div>
    <ViewNavLink navTitle="Voltar para login" handleClick={props.navigateToLogIn}/>
    <LargeButton buttonText="Recuperar senha" color="blue-class"/>

  </form>
);

export default ResetPass;

//todo optimize rerenders
