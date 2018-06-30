import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameTable from '../gameTable';
// import TeamScorerPickTable from '../teamScorerPickTable';
import GamePicker from '../gamePicker';
// import './round16Picks.css';
// import TopScorerPicker from '../topScorerPicker';
// import TeamsPicker from '../teamsPicker';


class QuarterPicks extends Component {

  render() {
    return (
      <div>
        <div className="pick-status">
           {this.props.status.quarterPicksOpen ?
            "Quarter finals - open for picks" :
            "Quarter finals - picks closed"
          }
        </div>
        {this.props.status.quarterPicksOpen && this.props.showPicker && (
          <div>
            <div className="rules-status">
              Pick score for regular + extra time. Press + to start pick

            </div>
            <div className="rules-status">
              If tie, pick team that advances.

            </div>
          </div>
        )}

        {this.props.showPicks  && this.props.quarterStats.map((game, index) => {
          if (game.status === "set") {
            return (
              <div key={game.id}>
                {this.props.quarterPicks[game.id] && (
                  <GameTable
                    game={game}
                    picks={this.props.quarterPicks[game.id]}
                  />
                )}

                {this.props.showPicker && (
                  <GamePicker
                    picks={this.props.quarterPicks[game.id]}
                    game={game}
                    round="quarterPicks"
                  />
                )}

                {/* <div>{game.team1}</div>
                <div>{game.team2}</div> */}

                {/* <RoundOnePicker
                  roundOnePicks={this.props.roundOnePicks[group]}
                  groupName={group}
                  group={this.props.groupsStats[group]}
                />

                <GroupTable
                  groupName={group} group={this.props.groupsStats[group]}
                  showScore={false}
                /> */}
              </div>
            )
          } else {
            return <div key={game.id}></div>
          }

        })}

      </div>
    )
  }
}

function mapStateToProps({ users, quarterStats, quarterPicks, status }) {
  return {
    quarterStats: Object.keys(quarterStats).map((game) => (
      quarterStats[game]
    )),
    status,
    // round16Picks
  }
}

export default connect(mapStateToProps)(QuarterPicks);
