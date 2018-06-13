import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import GroupView from './groupView';
import RoundOnePicks from './roundOnePicks';
class AppData extends Component {
  componentWillMount() {
    // this.props.spinnerOnOff(true);
    // Promise.all([
    //   this.props.getWatchProductsBrandsCompaniesCategories(), this.props.getWatchCitiesStatesCountries(),
    //   this.props.getWatchAdminUsers()
    // ])
    //   .then(() => {
    //     if (this.props.spinner.spinnerOn && this.props.user.currentUser) {
    //       this.props.spinnerOnOff(false);
    //     }
    // });
  }

  render() {
    // const { gotAll } = this.props
    return (
      <section>
        <Switch>
          <Route path='/home/groupStandings' component={GroupView}/>
          <Route path='/home/roundOnePicks' component={RoundOnePicks}/>
        </Switch>
      </section>
    );
  }
}


export default (AppData);
