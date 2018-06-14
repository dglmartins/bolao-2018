import React from 'react';
import './rules.css';
import {rules} from '../../../services/utils/rules';

const RulesTable = (props) => {
  return (
    <div className="rules-container">
      <div className="rules-title">Rules</div>
      {Object.keys(rules).map((stage) => (
        <table className="rules-table" key={stage}>
          <caption className="caption-rules">{stage}</caption>
          <tbody>
            <tr className="row">
              <th className="rules-head left-text">Description</th>
              <th className="rules-head">Points</th>
              <th className="rules-head">Max</th>
            </tr>
            {Object.keys(rules[stage]).map((rule) => {
              if (rule !== "maxPoints") {
                return (
                  <tr key={rule+stage}>
                    <td className="left-text">{rules[stage][rule].description}</td>
                    <td>{rules[stage][rule].points}</td>
                    <td>{rules[stage][rule].maxPoints}</td>
                  </tr>
                )
              } else {
                return (
                  <tr key={rule+stage}>
                    <td className="row left-text">{rules[stage][rule].description}</td>
                    <td className="row">{rules[stage][rule].points}</td>
                    <td className="row">{rules[stage][rule].maxPoints}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      ))}
    </div>

  )

};

export default RulesTable;
