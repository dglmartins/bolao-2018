import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setTeamPick } from '../../services/setDataThunk';

class TeamsPicker extends Component {

  changePick= (e) => {
    const teamPick = e.target.value;
    const { uid } = this.props.user.currentUser;
    this.props.setTeamPick({uid, teamPick})
  }

  render() {

    return (
      <table className="picker-table">
        <tbody>
          <tr>
            <th>Best Round 1 Campaign</th>
          </tr>
          <tr>
            <td>
              <select className="changer" value={this.props.teamPick.pick} onChange={this.changePick}>
                <option value="disabled" disabled>-----</option>
                {Object.keys(this.props.teams).map((team) => (
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
    setTeamPick: (data) => dispatch(setTeamPick(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsPicker);
