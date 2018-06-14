import React, { Component } from 'react';
import './home.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SubHeader from './subHeader';
import AppData from './appData';
// import SideMenu from './sideMenu';
import { firebaseAuth } from '../services/utils/api';
import { logInOut } from '../login/services/userActions';
import { changeHeaderNameShowing } from '../sharedComponents//mainHeader/services/headerActions';

import { getOnceAllGroups, getOnceMyRoundOnePicks, getStatusThunk, getTopScorersThunk, getTopScorerPickThunk } from './services/getDataThunk';
import { spinnerOnOff } from '../spinner/services/spinnerActions';


class Home extends Component {

  componentWillMount() {
    this.props.spinnerOnOff(true)
    firebaseAuth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.props.logInOut(currentUser);
        this.props.changeHeaderNameShowing(currentUser.displayName)
        Promise.all([this.props.getOnceAllGroups(), this.props.getOnceMyRoundOnePicks(currentUser.uid), this.props.getStatusThunk(), this.props.getTopScorersThunk(), this.props.getTopScorerPickThunk(currentUser.uid)]).then(() =>{
          this.props.spinnerOnOff(false);
        })
      } else {
        console.log("no user")
        this.props.spinnerOnOff(false);
        this.props.history.push('/login');
      }
    });
  }

  render () {
    return (
      <section className="home-container">
        {/* <HomeHeader currentUser={this.props.user.currentUser}/> */}
        <SubHeader/>
        <AppData
          roundOnePicks={this.props.roundOnePicks}
          topScorerPick={this.props.topScorerPick}
        />
        {/* <Route path="/home/sideMenu" component={SideMenu}/> */}
      </section>
    );
  }
}

function mapStateToProps ({ user, roundOnePicks, topScorerPick }) {
    return {
      user,
      roundOnePicks,
      topScorerPick
    };
}

function mapDispatchToProps (dispatch) {
  return {
    logInOut: (data) => dispatch(logInOut(data)),
    changeHeaderNameShowing: (data) => dispatch(changeHeaderNameShowing(data)),
    getOnceAllGroups: () => dispatch(getOnceAllGroups()),
    getOnceMyRoundOnePicks: (data) => dispatch(getOnceMyRoundOnePicks(data)),
    getStatusThunk: () => dispatch(getStatusThunk()),
    spinnerOnOff: (data) => dispatch(spinnerOnOff(data)),
    getTopScorersThunk: () => dispatch(getTopScorersThunk()),
    getTopScorerPickThunk: (data) => dispatch(getTopScorerPickThunk(data))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
