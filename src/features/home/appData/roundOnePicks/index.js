import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupTable from '../groupTable';
import TeamScorerPickTable from '../teamScorerPickTable';
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
            "Group stage closed for picks - confirm you picks below"
          }
        </div>
        {this.props.status.roundOnePicks && (
          <div>
            <div className="rules-status">
              Pick first and second place for each group,

            </div>
            <div className="rules-status">
              a top scorer, and the best group phase campaign

            </div>
          </div>
        )}

        {this.props.status.roundOnePicks && this.props.groupsNames.map((group) => (
          <div key={group}>

            <RoundOnePicker
              roundOnePicks={this.props.roundOnePicks[group]}
              groupName={group}
              group={this.props.groups[group]}
            />

            <GroupTable
              groupName={group} group={this.props.groups[group]}
              showScore={false}
            />
          </div>
        ))}
        {this.props.status.roundOnePicks && (
          <div>
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
        )}
        {!this.props.status.roundOnePicks && this.props.groupsNames.map((group) => (
          <GroupTable
            type="picks"
            groupName={group} group={this.props.groups[group]}
            showScore={false}
            picks={this.props.roundOnePicks[group]}
            key={group}
          />
        ))}

        {!this.props.status.roundOnePicks && (
          <TeamScorerPickTable
            extraPicks={this.props.extraPicks}
          />
        )}

      </div>
    )
  }
}

function mapStateToProps({ groups, status, topScorers, teams, roundOnePicks, topScorerPick, teamPick }) {
  return {
    groupsNames: Object.keys(groups).map((group) => (
      group
    )),
    groups,
    status,
    topScorers,
    teams,
    roundOnePicks,
    extraPicks: {team: teamPick.pick, topScorer: topScorerPick.pick}
  }
}

export default connect(mapStateToProps)(RoundOnePicks);
