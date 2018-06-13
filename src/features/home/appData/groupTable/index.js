import React from 'react';
import TeamRow from './components/TeamRow';
import Russia from '../../../assets/flags/Russia.svg';
import Uruguay from '../../../assets/flags/Uruguay.svg';
import SaudiArabia from '../../../assets/flags/SaudiArabia.svg';
import Egypt from '../../../assets/flags/Egypt.svg';

import './groupTable.css'

const GroupTable = (props) => {

  const handleSelect = (e) => {
    console.log(e.target)
  }

  return (
    <table className="group-table">
      <caption>{`Group ${props.group}`}</caption>
      <tbody>
        <tr>
          <th colSpan="2">Team</th>
          <th>points</th>
        </tr>
        <TeamRow
          teamName="Russia"
          teamImg={Russia}
          teamPoints={0}
          handleSelect={handleSelect}
        />
        <TeamRow
          teamName="Uruguay"
          teamImg={Uruguay}
          teamPoints={0}
        />
        <TeamRow
          teamName="Saudi Arabia"
          teamImg={SaudiArabia}
          teamPoints={0}
        />
        <TeamRow
          teamName="Egypt"
          teamImg={Egypt}
          teamPoints={0}
        />
      </tbody>


    </table>
  )


};

export default GroupTable
