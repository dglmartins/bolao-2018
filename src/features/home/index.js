import React, { Component } from 'react';
import './home.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import HomeHeader from './homeHeader';
// import SubHeader from './subHeader';
// import AppData from './appData';
// import SideMenu from './sideMenu';
import { firebaseAuth } from '../services/utils/api';
// import { spinnerOnOff } from '../spinner/services/spinnerActions';
import { logInOut } from '../login/services/userActions';
// import { isAdminThunk } from './services/homeThunkActions';

class Home extends Component {

  componentWillMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      const { uid, email } = user;
      if (user) {
        this.props.logInOut({uid, email})
      } else {
        alert("need to be signed in to see this page");
        this.props.history.push('/login');
      }
    });
  }

  render () {
    return (
      <section className="home-container">
        Home
        {/* <HomeHeader currentUser={this.props.user.currentUser}/> */}
        {/* <SubHeader /> */}
        {/* <AppData/> */}
        {/* <Route path="/home/sideMenu" component={SideMenu}/> */}
      </section>
    );
  }
}

function mapStateToProps ({ user }) {
    return {
      user
    };
}

function mapDispatchToProps (dispatch) {
  return {
    logInOut: (data) => dispatch(logInOut(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
