import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameTable from '../gameTable';
// import TeamScorerPickTable from '../teamScorerPickTable';
import GamePicker from '../gamePicker';
// import './round16Picks.css';
// import TopScorerPicker from '../topScorerPicker';
// import TeamsPicker from '../teamsPicker';


class Round16Picks extends Component {

  render() {
    return (
      <div>
        <div className="pick-status">
           {this.props.status.round16PicksOpen ?
            "Round 16 - open for picks" :
            "Round 16 - picks closed"
          }
        </div>
        {this.props.status.round16PicksOpen && this.props.showPicker && (
          <div>
            <div className="rules-status">
              Pick score for regular + extra time. Press + to start pick

            </div>
            <div className="rules-status">
              If tie, pick team that advances.

            </div>
          </div>
        )}

        {this.props.showPicks  && this.props.round16Stats.map((game, index) => {
          if (game.status === "set") {
            return (
              <div key={game.id}>
                {this.props.round16Picks[game.id] && (
                  <GameTable
                    game={game}
                    picks={this.props.round16Picks[game.id]}
                  />
                )}

                {this.props.showPicker && (
                  <GamePicker
                    picks={this.props.round16Picks[game.id]}
                    game={game}
                    round="round16Picks"
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
            return <div></div>
          }

        })}

      </div>
    )
  }
}

function mapStateToProps({ users, round16Stats, round16Picks, status }) {
  return {
    round16Stats: Object.keys(round16Stats).map((game) => (
      round16Stats[game]
    )),
    status,
    // round16Picks
  }
}

export default connect(mapStateToProps)(Round16Picks);
