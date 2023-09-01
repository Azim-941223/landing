import React, { useEffect } from "react";
import plus from "../../../assets/plus.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Values = (props) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <div className="content" data-aos="fade-up" data-aos-delay='400'>
      <img src={plus} alt="icon" />
      <p>{props.desc}</p>
    </div>
  );
};

export default Values;
