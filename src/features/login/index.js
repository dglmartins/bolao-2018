import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './login.css';
import SignIn from './signIn';
import ResetPass from './resetPass';
import MainHeader from '../sharedComponents/mainHeader';
import { firebaseAuth } from '../services/utils/api';
// import { spinnerOnOff } from '../spinner/services/spinnerActions';
import { signInThunk, resetPassThunk } from './services/logInThunk';
import ball from '../assets/ball.png';

const initialState = {
  signInInput: '',
  passwordInput: '',
  passResetInput: '',
  signInInputPlaceholder: 'email',
  passResetInputPlaceholder: 'email',
  passwordInputPlaceholder: 'senha'
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

  navigateToLogIn = () => {
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
    this.props.signInThunk({email: this.state.signInInput, password: this.state.passwordInput}).then(() => this.resetInputs());
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
      <section>
        <MainHeader>
          <h5>Bolao da Copa</h5>
          <img src={ball}></img>
        </MainHeader>

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
                signIn={this.signIn}
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
    resetPassThunk: (data) => dispatch(resetPassThunk(data))
  }
}


export default connect(null, mapDispatchToProps)(Login);
