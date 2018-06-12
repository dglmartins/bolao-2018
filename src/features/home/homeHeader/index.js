import React from 'react';
import { connect } from 'react-redux';
import { signOutThunk } from '../../login/services/logInThunk';
import { changeHeaderNameShowing } from './services/headerActions';
import MainHeader from '../../sharedComponents/mainHeader';
import HeaderUserContainer from './components/headerUserContainer';
import HeaderUserInfo from './components/headerUserInfo';
import ball from '../../assets/ball.png'
import './homeHeader.css';

const HomeHeader = (props) => {
  // const navigateToSideMenu = () => {
  //    props.history.push('/home/sideMenu');
  //  };
  const updateHeaderName = (e) => {
    (e.type === "mouseenter") ?
    props.changeHeaderNameShowing('Sign Out')  :
    props.changeHeaderNameShowing(props.currentUser.email)
  };

  const signOut = () => {
    props.signOutThunk();
  };

  return (
    <MainHeader>
      <div onMouseEnter={updateHeaderName} onMouseLeave={updateHeaderName}>
        <div className="menu-icon">
        {/* <div className="menu-icon" onClick={navigateToSideMenu}> */}
        </div>
        <HeaderUserContainer handleMouse={updateHeaderName}>
          <HeaderUserInfo title={props.nameShowing}  handleClick={signOut}/>
        </HeaderUserContainer>
        <p className="title">Bolao da Copa</p>
        <img src={ball}></img>
        {/* {!props.onSideMenu && (
          <div className="header-logo-container">
          </div>
        )} */}
        {/* {!props.onSideMenu && props.user && ( */}

        {/* )} */}
      </div>


    </MainHeader>
  );
}

function mapDispatchToProps (dispatch) {
  return {
    changeHeaderNameShowing: (data) => dispatch(changeHeaderNameShowing(data)),
    signOutThunk: () => dispatch(signOutThunk()),
  };
}

function mapStateToProps ({ header }) {
  return {
    nameShowing: header.nameShowing,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
