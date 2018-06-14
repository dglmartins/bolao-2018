import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';
import RoundOnePicker from '../roundOnePicker';
import './roundOnePicks.css';
import TopScorerPicker from '../topScorerPicker';
import TeamsPicker from '../teamsPicker';


class RoundOnePicks extends Component {
  render() {
    return (
      <div>
        <div className="pick-status">
          Status: {this.props.status.roundOnePicks ?
            "open for picks" :
            "closed for picks"
          }
        </div>
        <div className="rules-status">
          Pick first and second place for each group,

        </div>
        <div className="rules-status">
          a top scorer, and the best group phase campaign

        </div>
        {this.props.groupsNames.map((group) => (
          <div key={group}>
            {this.props.status.roundOnePicks && (
              <RoundOnePicker
                roundOnePicks={this.props.roundOnePicks[group]}
                groupName={group}
                group={this.props.groups[group]}
              />
            )}
            <GroupTable
              groupName={group} group={this.props.groups[group]}
              showScore={false}
            />
          </div>
        ))}
        <div>
          <TopScorerPicker topScorers={this.props.topScorers}
          topScorerPick={this.props.topScorerPick}/>
        </div>
        <div>
          <TeamsPicker
            teams={this.props.teams}
            teamPick={this.props.teamPick}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ groups, status, topScorers, teams }) {
  return {
    groupsNames: Object.keys(groups).map((group) => (
      group
    )),
    groups,
    status,
    topScorers,
    teams
  }
}

export default connect(mapStateToProps)(RoundOnePicks);
