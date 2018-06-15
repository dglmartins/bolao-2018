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
        <td className="narrow-td mid-align">{props.teamStats['MP']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align">{props.teamStats['W']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align">{props.teamStats['D']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align">{props.teamStats['L']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align">{props.teamStats['GF']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align">{props.teamStats['GA']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align">{props.teamStats['GD']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align">{props.teamStats['Pts']}</td>
      )}
    </tr>
  )
};

export default TeamRow
