import React, {useEffect} from "react";
import plus from "../../../assets/plus.svg";
import AOS from "aos";
import "aos/dist/aos.css";


const Content = (props) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <div className='content' data-aos="fade-right" data-aos-delay='250'>
      <img src={plus} alt="icon" />
      <p>{props.desc}</p>
    </div>
  );
};

export default Content;
