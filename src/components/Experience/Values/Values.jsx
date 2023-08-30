import React from "react";
import plus from '../../../assets/plus.svg'

const Values = (props) => {
  return (
    <div className='content'>
      <img src={plus} alt="icon" />
      <p>{props.desc}</p>
    </div>
  );
};

export default Values;
