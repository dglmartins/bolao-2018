import React, { Component } from 'react';
import './home.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './homeHeader';
// import SubHeader from './subHeader';
// import AppData from './appData';
// import SideMenu from './sideMenu';
import { firebaseAuth } from '../services/utils/api';
// import { spinnerOnOff } from '../spinner/services/spinnerActions';
import { logInOut } from '../login/services/userActions';
import { changeHeaderNameShowing } from './homeHeader/services/headerActions';

// import { isAdminThunk } from './services/homeThunkActions';

class Home extends Component {

  componentWillMount() {
    firebaseAuth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.props.logInOut(currentUser);
        this.props.changeHeaderNameShowing(currentUser.email)
      } else {
        console.log("no user")
        this.props.history.push('/login');
      }
    });
  }

  render () {
    return (
      <section className="home-container">
        home
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
    logInOut: (data) => dispatch(logInOut(data)),
    changeHeaderNameShowing: (data) => dispatch(changeHeaderNameShowing(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
