import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setTopScorerPick } from '../../services/setDataThunk';

class TopScorerPicker extends Component {

  changePick= (e) => {
    const topScorerPick = e.target.value;
    const { uid } = this.props.user.currentUser;
    this.props.setTopScorerPick({uid, topScorerPick})
  }

  render() {

    return (
      <table className="picker-table">
        <tbody>
          <tr>
            <th>Top Scorer</th>
          </tr>
          <tr>
            <td>
              <select className="changer" value={this.props.topScorerPick.pick} onChange={this.changePick}>
                <option value="disabled" disabled>-----</option>
                {Object.keys(this.props.topScorers).map((scorer) => (
                  <option key={scorer} value={scorer}>{scorer}</option>
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
    setTopScorerPick: (data) => dispatch(setTopScorerPick(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopScorerPicker);
