import React from 'react';
import { getCountryStyle } from '../../../../services/utils/helpers';
import './teamRow.css'


const TeamRow = (props) => {
  const style = getCountryStyle(props.teamName)

  return (
    <tr onClick={props.handleSelect}>
      <td className="flag-td" style={style}>
      </td>
      <td className="name-td">{props.teamName}</td>
      {props.showScore && (
        <td className="narrow-td mid-align">{props.teamPoints}</td>
      )}
    </tr>
  )
};

export default TeamRow
