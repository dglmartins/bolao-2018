import React from 'react';
import './userRow.css'
import { withRouter } from 'react-router-dom';


const UserRow = (props) => {
  const handleClick = (uid) => {
    props.history.push(`/home/groupStandings/${uid}`)
  }

  const getPoints = () => {

    const groupStageArray = Object.keys(props.user.bolaoPoints.groupStage).map((group) => props.user.bolaoPoints.groupStage[group])
    const points = groupStageArray.reduce((acc, value) => (
      acc + value
    ), 0)
    return points
  }


  return (
    <tr onClick={() => handleClick(props.uid)}>
      <td className="user-td">{props.user.displayName}</td>
      <td className="user-td mid-align">{getPoints()}</td>
    </tr>
  )
};

export default withRouter(UserRow)
