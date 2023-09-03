import React, {useState, useEffect} from "react";
import scss from './Footer.module.scss'
import phone from '../../assets/phone.svg';
import letter from '../../assets/letter.png';
import marker from '../../assets/marker.png';
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

const Footer = () => {
  const { t } = useTranslation();
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}api/contacts/`)
      .then((response) => {
        const data = response.data[0];
        setContactData(data);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, []);

  return (
    <div className={scss.footer}>
      <h2>{t("contact.title")}</h2>
      <div className={scss.data_company}>
        <div>
          <img src={phone} alt="phone_icon" />
          <p>{contactData.phone}</p>
        </div>
        <div>
          <img src={letter} alt="letter_icon" />
          <p>{contactData.email}</p>
        </div>
        <div>
          <img src={marker} alt="map_marker" />
          <p>{contactData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
