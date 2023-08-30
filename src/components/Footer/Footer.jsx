import React from "react";
import scss from './Footer.module.scss'
import phone from '../../assets/phone.svg';
import letter from '../../assets/letter.png';
import marker from '../../assets/marker.png';

const Footer = () => {
  return (
    <div className={scss.footer}>
      <h2>Наши контакты</h2>
      <div className={scss.data_company}>
        <div>
          <img src={phone} alt="" />
          <p>+996 708 746 049</p>
        </div>
        <div>
          <img src={letter} alt="" />
          <p>myticketllc@gmail.com</p>
        </div>
        <div>
          <img src={marker} alt="" />
          <p>Кыргызская Республика, г. Бишкек, ул. К. Акиева, д. 100, кв. 18</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
