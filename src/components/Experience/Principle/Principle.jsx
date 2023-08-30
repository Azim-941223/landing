import React from "react";
import chek from "../../../assets/checkmark.svg"

const Principle = (props) => {
  return (
    <div className='content'>
      <img src={chek} alt="icon" />
      <p>{props.desc}</p>
    </div>
  );
};

export default Principle;
