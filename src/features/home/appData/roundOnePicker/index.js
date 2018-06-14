import React, { Component } from 'react';
import { connect } from 'react-redux'
import './roundOnePicker.css';
import { changePick } from '../../services/actions/picksActions';

class RoundOnePicker extends Component {

  changePickOne = (e) => {
    const firstPlacePick = e.target.value
    if (firstPlacePick == this.props.roundOnePicks.secondPlacePick) {
      alert(`You've already picked ${firstPlacePick}`);
    } else {
      const group = this.props.groupName;
      const whichPick = "firstPlacePick";
      const pick = firstPlacePick
      this.props.changePick({group, whichPick, pick});
    }
  }
  //
  // changePickTwo = (e) => {
  //   const secondPlacePick = e.target.value
  //   if (secondPlacePick == this.state.firstPlacePick) {
  //     alert(`You've already picked ${secondPlacePick}`);
  //   } else {
  //     this.setState({secondPlacePick});
  //   }
  // }

  render() {
    console.log(this.props.roundOnePicks)

    return (
      <table className="picker-table">
        <tbody>
          <tr>
            <th>First place</th>
            <th>Second place</th>
          </tr>
          <tr>
            <td>
              <select className="book-shelf-changer" value={this.props.roundOnePicks.firstPlacePick} onChange={this.changePickOne}>
                <option value="disabled" disabled>-----</option>
                {Object.keys(this.props.group).map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </td>
            <td>
              <select className="book-shelf-changer" value={this.props.roundOnePicks.secondPlacePick} onChange={this.changePickTwo}>
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

function mapDispatchToProps(dispatch) {
  return {
    changePick: (data) => dispatch(changePick(data))
  }
}

export default connect(null, mapDispatchToProps)(RoundOnePicker);
