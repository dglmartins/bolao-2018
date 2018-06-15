import React from 'react';
import { getCountryStyle } from '../../../../services/utils/helpers';
import './teamRow.css';

const getStyleRow = (pickObject, teamName) => {
  if (pickObject && pickObject.firstPlacePick === teamName) {
    return {backgroundColor: "#d50000", color: "white"}
  } else if (pickObject && pickObject.secondPlacePick === teamName) {
    return {backgroundColor: "#2962ff", color: "white"}
  } else {
    return {}
  }
}


const TeamRow = (props) => {
  console.log(props.myPicks)
  const style = getCountryStyle(props.teamName)
  const styleRow = getStyleRow(props.myPicks, props.teamName);

  return (
    <tr onClick={props.handleSelect}>
      <td className="flag-td" style={style}>
      </td>
      <td className="name-td" style={styleRow}>{props.teamName}</td>
      {props.showScore && (
        <td className="narrow-td mid-align" style={styleRow}>{props.teamStats['MP']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align" style={styleRow}>{props.teamStats['W']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align" style={styleRow}>{props.teamStats['D']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align" style={styleRow}>{props.teamStats['L']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align" style={styleRow}>{props.teamStats['GF']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align" style={styleRow}>{props.teamStats['GA']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align" style={styleRow}>{props.teamStats['GD']}</td>
      )}
      {props.showScore && (
        <td className="narrow-td mid-align" style={styleRow}>{props.teamStats['Pts']}</td>
      )}
    </tr>
  )
};

export default TeamRow
