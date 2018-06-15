import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './login.css';
import SignIn from './signIn';
import ResetPass from './resetPass';
import MainHeader from '../sharedComponents/mainHeader';
import { firebaseAuth } from '../services/utils/api';
import { spinnerOnOff } from '../spinner/services/spinnerActions';
import { signInThunk, resetPassThunk, createUserThunk } from './services/logInThunk';

const initialState = {
  signInInput: '',
  nameInput: '',
  passwordInput: '',
  passResetInput: '',
  signInInputPlaceholder: 'email',
  passResetInputPlaceholder: 'email',
  passwordInputPlaceholder: 'password',
  nameInputPlaceholder: 'name',
  creatingUser: false
};

class Login extends Component {

  state = initialState;

  componentWillMount() {
    this.props.history.push('/login');
    // this.props.spinnerOnOff(true);
    firebaseAuth.onAuthStateChanged((user) => {
      (user) ? this.props.history.push('/home') : "";
    });
  }

  navigateToResetPassword = () => {
    this.props.history.push('/login/resetPassword');
  }

  navigateToCreateUser = () => {
    this.setState(initialState);
    this.props.history.push('/login/createUser');
  }

  navigateToLogIn = () => {
    this.setState(initialState);
    this.props.history.push('/login');
  }

  updatePlaceholder = (e) => {
    const inputName = e.target.getAttribute('name');
    const statePropertyName = inputName.concat("Placeholder");
    (e.type === 'focus') ? this.setState({ [statePropertyName]: ''}) : this.setState({ [statePropertyName]: initialState[statePropertyName]});
  }
  //
  updateInput = (e) => {
    const inputName = e.target.getAttribute('name');
    const inputValue = e.target.value;
    this.setState({ [inputName]: inputValue });
  }

  resetInputs = () => {
    this.setState(initialState);
  };

  signIn = (e) => {
    e.preventDefault();
    this.props.spinnerOnOff(true);
    this.props.signInThunk({email: this.state.signInInput, password: this.state.passwordInput}).then(() => {
      this.resetInputs()
      this.props.spinnerOnOff(false)
    } );
  }

  createUser = (e) => {
    e.preventDefault();
    this.props.spinnerOnOff(true);
    this.props.createUserThunk({email: this.state.signInInput, password: this.state.passwordInput, displayName: this.state.nameInput}).then((results) => {
      console.log(results)
      this.props.spinnerOnOff(false)
      this.resetInputs()
    });

  }

  resetPass = (e) => {
    e.preventDefault();
    this.props.resetPassThunk(this.state.passResetInput)
      .then((results) => {
        if (results === 'success') {
          this.props.history.push('/login');
        }
        this.resetInputs()
      });
  }

  render() {
    return (
      <section className="login-data-container">

        <section className="logo-container">
        </section>

        <section className="login-form-container">
          <Route exact path='/login/' render={() => (
              <SignIn
                signInInput={this.state.signInInput}
                passwordInput={this.state.passwordInput}
                updateInput={this.updateInput}
                updatePlaceholder={this.updatePlaceholder}
                signInInputPlaceholder={this.state.signInInputPlaceholder}
                passwordInputPlaceholder={this.state.passwordInputPlaceholder}
                navigateToResetPassword={this.navigateToResetPassword}
                navigateToCreateUser={this.navigateToCreateUser}
                onSubmit={this.signIn}
                creatingUser={false}
              />


          )}/>
          <Route exact path='/login/resetPassword' render={() => (
              <ResetPass
                resetPass={this.resetPass}
                updateInput={this.updateInput}
                passResetInput={this.state.passResetInput}
                updatePlaceholder={this.updatePlaceholder}
                passResetInputPlaceholder={this.state.passResetInputPlaceholder}
                navigateToLogIn={this.navigateToLogIn}
              />
          )}/>
          {/* <Route exact path='/login/createUser' render={() => (
            <SignIn
              signInInput={this.state.signInInput}
              passwordInput={this.state.passwordInput}
              nameInput={this.state.nameInput}
              updateInput={this.updateInput}
              updatePlaceholder={this.updatePlaceholder}
              signInInputPlaceholder={this.state.signInInputPlaceholder}
              passwordInputPlaceholder={this.state.passwordInputPlaceholder}
              nameInputPlaceholder={this.state.nameInputPlaceholder}
              navigateToLogIn={this.navigateToLogIn}
              creatingUser={true}
              onSubmit={this.createUser}
            />

          )}/> */}
        </section>
      </section>
    );
  }
};

// function mapStateToProps ({ spinner }) {
//     return {
//       spinner
//     };
// }
//

function mapDispatchToProps (dispatch) {
  return {
    signInThunk: (data) => dispatch(signInThunk(data)),
    resetPassThunk: (data) => dispatch(resetPassThunk(data)),
    createUserThunk: (data) => dispatch(createUserThunk(data)),
    spinnerOnOff: (data) => dispatch(spinnerOnOff(data))
  }
}


export default withRouter(connect(null, mapDispatchToProps)(Login));
