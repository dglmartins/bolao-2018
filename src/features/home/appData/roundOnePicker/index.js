import React from 'react';

const RoundOnePicker = (props) => (
  // <select className="book-shelf-changer" value="Russia" onChange={(e) => console.log(e.target.value)}>
  //   <option value="disabled" disabled>First Place Pick</option>
  //   <option value="Russia">Russia</option>
  //   <option value="Egypt">Egypt</option>
  //   <option value="Uruguay">Uruguay</option>
  //   <option value="SaudiArabia">Saudi Arabia</option>
  // </select>
  <div className="input-field col s12">
    <select>
      <option value="" disabled>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>

);

export default RoundOnePicker;
