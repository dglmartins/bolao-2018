import React from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './normalize.css'

import Home from './home';
import Login from './login';
import MainHeader from './sharedComponents/mainHeader';
// import Spinner from './spinner';
import './App.css';


const App = (props) => (
  <div className="overall-container">
    <MainHeader/>
      <Switch>
      <Route path='/home' component={Home}/>

      <Route path='/login' component={Login}/>
      <Route component={Login}/>
    </Switch>

    {/* Spinner always last - out of any switch */}
    {/* {props.spinner.spinnerOn &&
      <Spinner />
    } */}
  </div>
)

export default App;
