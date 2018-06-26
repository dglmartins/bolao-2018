import React, { Component } from 'react';
import { connect } from 'react-redux'
import './gamePicker.css';
import SmallButton from '../../../sharedComponents/smallButton';
// import { createPick, updatePick } from '../../services/setDataThunk';

class GamePicker extends Component {

  // changePickOne = (e) => {
  //   const firstPlacePick = e.target.value;
  //   const group = this.props.groupName;
  //   const whichPick = "firstPlacePick";
  //   const pick = firstPlacePick;
  //   const { uid } = this.props.user.currentUser;
  //   if (firstPlacePick == this.props.roundOnePicks.secondPlacePick) {
  //     alert(`You've already picked ${firstPlacePick}`);
  //   } else if (this.props.roundOnePicks.firstPlacePick == "disabled") {
  //     this.props.createPick({uid, group, whichPick, pick})
  //   } else {
  //     this.props.updatePick({uid, group, whichPick, pick})
  //
  //     // this.props.createPick({uid, group, whichPick, pick});
  //   }
  // }

  // changePickTwo = (e) => {
  //   const secondPlacePick = e.target.value;
  //   const group = this.props.groupName;
  //   const whichPick = "secondPlacePick";
  //   const pick = secondPlacePick;
  //   const { uid } = this.props.user.currentUser;
  //   if (secondPlacePick == this.props.roundOnePicks.firstPlacePick) {
  //     alert(`You've already picked ${secondPlacePick}`);
  //   } else if (this.props.roundOnePicks.secondPlacePick == "disabled") {
  //     this.props.createPick({uid, group, whichPick, pick})
  //   } else {
  //     this.props.updatePick({uid, group, whichPick, pick})
  //   }
  // }

  render() {
    console.log(this.props.roundOnePicks)

    return (
      <table className="score-table">
        <tbody>
          <tr>
            <td className="score-left">
              <SmallButton color="blue-class" buttonText="-"/>
              <SmallButton color="blue-class" buttonText="+"/>
            </td>
            {this.props.picks.team1Score === this.props.picks.team2Score && (
              <td className="show-select">
                <select className="changer" value={this.props.picks.teamAdvance} onChange={this.changeTieTeamAdvance}>
                  <option value="disabled" disabled>tie - pick winner</option>
                  <option value={this.props.game.team1}>{this.props.game.team1}</option>
                  <option value={this.props.game.team2}>{this.props.game.team2}</option>
                </select>
              </td>
            )}
            {this.props.picks.team1Score !== this.props.picks.team2Score && (
              <td className="show-select"></td>
            )}
            <td className="score-right">
              <SmallButton color="blue-class" buttonText="-"/>
              <SmallButton color="blue-class" buttonText="+"/>
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

// function mapDispatchToProps(dispatch) {
//   return {
//     createPick: (data) => dispatch(createPick(data)),
//     updatePick: (data) => dispatch(updatePick(data))
//   }
// }

export default connect(mapStateToProps)(GamePicker);
