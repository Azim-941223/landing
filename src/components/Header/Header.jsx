import React from "react";
import video from "../../assets/croc_banner_final.mp4";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <video className={scss.header_video} autoPlay muted width="100%">
        <source src={video} type="video/mp4" />
      </video>
      <header className="container">
        <h1 className={scss.header_title}>My Ticket</h1>
        <div className={scss.main_title}>
          <h2>My Ticket</h2>
          <h4>
            Цифровые технологии во всех сферах жизни: быстро, удобно и
            эффективно.
          </h4>
        </div>
      </header>
    </div>
  );
};

export default Header;
