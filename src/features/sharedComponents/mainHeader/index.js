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
  const updateHeaderName = (e) => {
    if (props.user.currentUser) {
      (e.type === "mouseenter") ?
      props.changeHeaderNameShowing('Sign Out')  :
      props.changeHeaderNameShowing(props.user.currentUser.email)
    }
  };

  const signOut = () => {
    props.signOutThunk();
  };

  return (
    <header className="main-header red accent-4">
      <div onMouseEnter={updateHeaderName} onMouseLeave={updateHeaderName}>
        {props.user.currentUser && (
          <div>
            <div className="menu-icon">
            {/* <div className="menu-icon" onClick={navigateToSideMenu}> */}
            </div>
            <HeaderUserContainer handleMouse={updateHeaderName}>
              <HeaderUserInfo title={props.nameShowing}  handleClick={signOut}/>
            </HeaderUserContainer>
          </div>
        )}
        <p className="title">Bolao da Copa</p>
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
