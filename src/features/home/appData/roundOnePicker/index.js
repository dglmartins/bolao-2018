import React, { Component } from 'react';
import { connect } from 'react-redux'
import './roundOnePicker.css';
import { createPick, updatePick } from '../../services/setDataThunk';

class RoundOnePicker extends Component {

  changePickOne = (e) => {
    const firstPlacePick = e.target.value;
    const group = this.props.groupName;
    const whichPick = "firstPlacePick";
    const pick = firstPlacePick;
    const { uid } = this.props.user.currentUser;
    if (firstPlacePick == this.props.roundOnePicks.secondPlacePick) {
      alert(`You've already picked ${firstPlacePick}`);
    } else if (this.props.roundOnePicks.firstPlacePick == "disabled") {
      this.props.createPick({uid, group, whichPick, pick})
    } else {
      this.props.updatePick({uid, group, whichPick, pick})

      // this.props.createPick({uid, group, whichPick, pick});
    }
  }

  changePickTwo = (e) => {
    const secondPlacePick = e.target.value;
    const group = this.props.groupName;
    const whichPick = "secondPlacePick";
    const pick = secondPlacePick;
    const { uid } = this.props.user.currentUser;
    if (secondPlacePick == this.props.roundOnePicks.firstPlacePick) {
      alert(`You've already picked ${secondPlacePick}`);
    } else if (this.props.roundOnePicks.secondPlacePick == "disabled") {
      this.props.createPick({uid, group, whichPick, pick})
    } else {
      this.props.updatePick({uid, group, whichPick, pick})
    }
  }

  render() {

    return (
      <table className="picker-table">
        <tbody>
          <tr>
            <th>First place</th>
            <th>Second place</th>
          </tr>
          <tr>
            <td>
              <select className="changer" value={this.props.roundOnePicks.firstPlacePick} onChange={this.changePickOne}>
                <option value="disabled" disabled>-----</option>
                {Object.keys(this.props.group).map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </td>
            <td>
              <select className="changer" value={this.props.roundOnePicks.secondPlacePick} onChange={this.changePickTwo}>
                <option value="disabled" disabled>------</option>
                {Object.keys(this.props.group).map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
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
    createPick: (data) => dispatch(createPick(data)),
    updatePick: (data) => dispatch(updatePick(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundOnePicker);
