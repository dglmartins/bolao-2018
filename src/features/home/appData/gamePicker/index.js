import React, { Component } from 'react';
import { connect } from 'react-redux'
import './gamePicker.css';
import SmallButton from '../../../sharedComponents/smallButton';
import { createGamePick, updateTeamAdvance } from '../../services/setDataThunk';

class GamePicker extends Component {

  subtractGoalTeam1 = () => {
    console.log("I am here")
    if (this.props.picks.team1Score === 0) {
      return;
    }

    const { uid } = this.props.user.currentUser;
    const whichRound = this.props.round;
    const whichGame = this.props.game.id;
    const team1Score = this.props.picks.team1Score - 1;
    const team2Score = this.props.picks.team2Score;
    const team1 = this.props.game.team1;
    const team2 = this.props.game.team2;



    // if (!this.props.picks.set) {
    this.props.createGamePick({uid, whichRound, whichGame, team1Score, team2Score, team1, team2  })
    // }
    // else {
    //   const whichScore = "team1Score";
    //   this.props.updateGamePick({uid, whichRound, whichGame, whichScore, newScore: team1Score})
    // }


  }

  addGoalTeam1 = () => {
    const { uid } = this.props.user.currentUser;
    const whichRound = this.props.round;
    const whichGame = this.props.game.id;
    const team1Score = this.props.picks.team1Score + 1;
    const team2Score = this.props.picks.team2Score;
    const team1 = this.props.game.team1;
    const team2 = this.props.game.team2;

    // if (this.props.picks.teamAdvance === "disabled") {
    this.props.createGamePick({uid, whichRound, whichGame, team1Score, team2Score, team1, team2  })
    // }
  }

  subtractGoalTeam2 = () => {
    console.log("I am here")
    if (this.props.picks.team2Score === 0) {
      return;
    }
    const { uid } = this.props.user.currentUser;
    const whichRound = this.props.round;
    const whichGame = this.props.game.id;
    const team2Score = this.props.picks.team2Score - 1;
    const team1Score = this.props.picks.team1Score;
    const team1 = this.props.game.team1;
    const team2 = this.props.game.team2;

    // console.log(uid, whichRound, whichGame, team1, team2, team1Score, team2Score)

    // if newScore = this.props.picks.team2Score {
    //   alert("You've picked a tie, please update your winner pick in the select box or change the score")
    // }

    // if (this.props.picks.teamAdvance === "disabled") {
    this.props.createGamePick({uid, whichRound, whichGame, team1Score, team2Score, team1, team2  })
    // }


  }

  addGoalTeam2 = () => {
    const { uid } = this.props.user.currentUser;
    const whichRound = this.props.round;
    const whichGame = this.props.game.id;
    const team2Score = this.props.picks.team2Score + 1;
    const team1Score = this.props.picks.team1Score;
    const team1 = this.props.game.team1;
    const team2 = this.props.game.team2;

    // if (this.props.picks.teamAdvance === "disabled") {
    this.props.createGamePick({uid, whichRound, whichGame, team1Score, team2Score, team1, team2  })
    // }
  }

  changeTieTeamAdvance = (e) => {
    if (!this.props.picks.set) {
      return;
    }
    console.log(e.target.value)
    const teamAdvance = e.target.value;
    const { uid } = this.props.user.currentUser;
    const whichRound = this.props.round;
    const whichGame = this.props.game.id;
    this.props.updateTeamAdvance({ uid, whichRound, whichGame, teamAdvance })
  }

  render() {
    console.log(this.props.roundOnePicks)

    return (
      <table className="score-table">
        <tbody>
          <tr>
            <td className="score-left">
              <SmallButton color="blue-class" buttonText="-" handleClick={this.subtractGoalTeam1}/>
              <SmallButton color="blue-class" buttonText="+" handleClick={this.addGoalTeam1}/>
            </td>
            {this.props.picks.team1Score === this.props.picks.team2Score && this.props.picks.set && (
              <td className="show-select">
                <select className="changer" value={this.props.picks.teamAdvance} onChange={this.changeTieTeamAdvance}>
                  <option value="disabled" disabled>if tie - pick winner</option>
                  <option value={this.props.game.team1}>{this.props.game.team1}</option>
                  <option value={this.props.game.team2}>{this.props.game.team2}</option>
                </select>
              </td>
            )}
            {(this.props.picks.team1Score !== this.props.picks.team2Score || !this.props.picks.set) && (
              <td className="show-select"></td>
            )}
            <td className="score-right">
              <SmallButton color="blue-class" buttonText="-" handleClick={this.subtractGoalTeam2}/>
              <SmallButton color="blue-class" buttonText="+" handleClick={this.addGoalTeam2}/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createGamePick: (data) => dispatch(createGamePick(data)),
    updateTeamAdvance: (data) => dispatch(updateTeamAdvance(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePicker);
