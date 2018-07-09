import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameTable from '../gameTable';
// import TeamScorerPickTable from '../teamScorerPickTable';
import GamePicker from '../gamePicker';
import './finalPicks.css';
// import TopScorerPicker from '../topScorerPicker';
// import TeamsPicker from '../teamsPicker';


class FinalPicks extends Component {

  render() {
    console.log(this.props)

    return (
      <div>
        <div className="pick-status">
           {this.props.status.finalPicksOpen ?
            "Finals/3v4 - open for picks" :
            "Finals/3v4 - picks closed"
          }
        </div>
        {this.props.status.finalPicksOpen && this.props.showPicker && (
          <div>
            <div className="rules-status">
              Pick score for regular + extra time. Press + to start pick

            </div>
            <div className="rules-status">
              If tie, pick team that advances.

            </div>
          </div>
        )}

        {this.props.showPicks  && this.props.finalStats.map((game, index) => {
          if (game.status === "set") {
            return (
              <div key={game.id}>
                {this.props.finalPicks[game.id] && (
                  <GameTable
                    game={game}
                    picks={this.props.finalPicks[game.id]}
                  />
                )}

                {this.props.showPicker && (
                  <GamePicker
                    picks={this.props.finalPicks[game.id]}
                    game={game}
                    round="finalPicks"
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

function mapStateToProps({ users, finalStats, finalPicks, status }) {
  return {
    finalStats: Object.keys(finalStats).map((game) => (
      finalStats[game]
    )),
    status,
    // round16Picks
  }
}

export default connect(mapStateToProps)(FinalPicks);
