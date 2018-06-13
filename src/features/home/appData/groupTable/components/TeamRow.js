import React from 'react';
import { getCountryStyle } from '../../../../services/utils/helpers';
import './teamRow.css'


const TeamRow = (props) => {
  const style = getCountryStyle(props.teamName)
  return (
    <tr onClick={props.handleSelect}>
      <td className="wide-td" style={style}>
      </td>
      <td className="left">{props.teamName}</td>
      {props.showScore && (
        <td className="mid-align">{props.teamPoints}</td>
      )}
    </tr>
  )
};

export default TeamRow
