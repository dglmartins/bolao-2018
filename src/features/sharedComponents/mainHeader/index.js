import React from 'react';
import './mainHeader.css';
import ball from '../../assets/ball.png';
import { connect } from 'react-redux';
import { signOutThunk } from '../../login/services/logInThunk';
import { changeHeaderNameShowing } from './services/headerActions';
import HeaderUserContainer from './components/headerUserContainer';
import HeaderUserInfo from './components/headerUserInfo';

const HomeHeader = (props) => {
  // const navigateToSideMenu = () => {
  //    props.history.push('/home/sideMenu');
  //  };
  // const updateHeaderName = (e) => {
  //   if (props.user.currentUser) {
  //     (e.type === "mouseenter") ?
  //     props.changeHeaderNameShowing('Sign Out')  :
  //     props.changeHeaderNameShowing(props.user.currentUser.displayName)
  //   }
  // };

  const signOut = () => {
    props.signOutThunk();
  };

  return (
    <header className="main-header">
      <div>
        {props.user.currentUser && (
          <div>
            <div className="signout" onClick={signOut}>
              Sign out
            {/* <div className="menu-icon" onClick={navigateToSideMenu}> */}
            </div>
            <HeaderUserContainer>
              <HeaderUserInfo title={props.nameShowing}/>
            </HeaderUserContainer>
          </div>
        )}
        <img src={ball}></img>
        {/* {!props.onSideMenu && (
          <div className="header-logo-container">
          </div>
        )} */}
        {/* {!props.onSideMenu && props.user && ( */}

        {/* )} */}
      </div>


    </header>
  );
}

function mapDispatchToProps (dispatch) {
  return {
    changeHeaderNameShowing: (data) => dispatch(changeHeaderNameShowing(data)),
    signOutThunk: () => dispatch(signOutThunk()),
  };
}

function mapStateToProps ({ header, user }) {
  return {
    nameShowing: header.nameShowing,
    user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
