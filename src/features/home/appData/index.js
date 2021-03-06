import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import GroupView from './groupView';
import UsersView from './usersView';
import RulesTable from './rules/rulesTable';
import RoundOnePicks from './roundOnePicks';
import Round16Picks from './round16Picks';
import QuarterPicks from './quarterPicks';
import SemiPicks from './semiPicks';
import FinalPicks from './finalPicks';


import './appData.css'
class AppData extends Component {


  render() {
    return (
      <section className="app-data-container">
        <Switch>
          <Route
            exact path={`/home/groupStandings/:user_id`}
            render={({ match }) => (
              <GroupView uid={match.params.user_id}/>
            )}
          />
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
                showPicks={this.props.showRound16Picks}
              />
          )}/>
          <Route path='/home/quarterPicks' render={() => (
              <QuarterPicks
                showPicker={true}
                quarterPicks={this.props.quarterPicks}
                showPicks={this.props.showQuarterPicks}
              />
          )}/>
          <Route path='/home/semiPicks' render={() => (
              <SemiPicks
                showPicker={true}
                semiPicks={this.props.semiPicks}
                showPicks={this.props.showSemiPicks}
              />
          )}/>

          <Route path='/home/finalPicks' render={() => (
              <FinalPicks
                showPicker={true}
                finalPicks={this.props.finalPicks}
                showPicks={this.props.showFinalPicks}
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
