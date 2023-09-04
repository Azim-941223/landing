/**
 * Header Component
 *
 * This component represents the header section of your application. It includes a video background,
 * a language selector, and the application's logo and title.
 *
 * @component
 * @example
 * import Header from "./Header";
 *
 * // Inside the parent component's render function:
 * <Header />
 */
import React from "react";
import video from "../../assets/croc_banner_final.mp4";
import scss from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import whitelogo from "../../assets/whitelogo.svg"

const Header = () => {
  const { t, i18n } = useTranslation();

  // Function to handle language change
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className={scss.main_header}>
      {/* Video background */}
      <video className={scss.header_video} autoPlay muted width="100%">
        <source src={video} type="video/mp4" />
      </video>
      
      {/* Language selector */}
      <select
        className={scss.select_lang}
        id="languages"
        name="languages"
        onChange={handleLanguageChange}
        value={i18n.language}>
        <option value="ru">Русский</option>
        <option value="en">English</option>
        <option value="ky">Кыргызча</option>
      </select>
      
      <header className="container">
        <div className={scss.header_title}>
          <h1>My Ticket</h1>
          <img src={whitelogo} alt="logo" />
        </div>        
        <div className={scss.main_title}>
          <h2>My Ticket</h2>
          <h4>{t("header.desc")}</h4>
        </div>
      </header>
    </div>
  );
};

export default Header;
