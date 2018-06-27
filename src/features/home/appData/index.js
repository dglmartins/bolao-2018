import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import GroupView from './groupView';
import UsersView from './usersView';
import RulesTable from './rules/rulesTable';
import RoundOnePicks from './roundOnePicks';
import Round16Picks from './round16Picks';
import './appData.css'
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
      <section className="app-data-container">
        <Switch>
          <Route
            exact path={`/home/groupStandings/:user_id`}
            render={({ match }) => (
              <GroupView uid={match.params.user_id}/>
            )}
          />
          {/* <Route path='/home/groupStandings' component={GroupView}/> */}
          <Route path='/home/roundOnePicks' render={() => (
              <RoundOnePicks
                roundOnePicks={this.props.roundOnePicks}
                topScorerPick={this.props.topScorerPick}
                teamPick={this.props.teamPick}
              />
          )}/>
          <Route path='/home/round16Picks' render={() => (
              <Round16Picks
                showPicker={true}
                round16Picks={this.props.round16Picks}
              />
          )}/>
          <Route path='/home/bolaoStandings' component={UsersView}/>
          <Route path='/home/rules' component={RulesTable}/>
        </Switch>
      </section>
    );
  }
}


export default withRouter(AppData);
