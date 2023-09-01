import React, { useEffect } from "react";
import chek from "../../../assets/checkmark.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Principle = (props) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <div className="content" data-aos="fade-left" data-aos-delay='400'>
      <img src={chek} alt="icon" />
      <p>{props.desc}</p>
    </div>
  );
};

export default Principle;
