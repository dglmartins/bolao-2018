import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameTable from '../gameTable';
// import TeamScorerPickTable from '../teamScorerPickTable';
import GamePicker from '../gamePicker';
import './semiPicks.css';
// import TopScorerPicker from '../topScorerPicker';
// import TeamsPicker from '../teamsPicker';


class SemiPicks extends Component {

  render() {
    return (
      <div>
        <div className="pick-status">
           {this.props.status.semiPicksOpen ?
            "Semi finals - open for picks" :
            "Semi finals - picks closed"
          }
        </div>
        {this.props.status.semiPicksOpen && this.props.showPicker && (
          <div>
            <div className="rules-status">
              Pick score for regular + extra time. Press + to start pick

            </div>
            <div className="rules-status">
              If tie, pick team that advances.

            </div>
          </div>
        )}

        {this.props.showPicks  && this.props.semiStats.map((game, index) => {
          if (game.status === "set") {
            return (
              <div key={game.id}>
                {this.props.semiPicks[game.id] && (
                  <GameTable
                    game={game}
                    picks={this.props.semiPicks[game.id]}
                  />
                )}

                {this.props.showPicker && (
                  <GamePicker
                    picks={this.props.semiPicks[game.id]}
                    game={game}
                    round="semiPicks"
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

function mapStateToProps({ users, semiStats, semiPicks, status }) {
  return {
    semiStats: Object.keys(semiStats).map((game) => (
      semiStats[game]
    )),
    status,
    // round16Picks
  }
}

export default connect(mapStateToProps)(SemiPicks);
