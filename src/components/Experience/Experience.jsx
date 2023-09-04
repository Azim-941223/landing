/**
 * Experience Component
 *
 * This component displays experience-related information, including content, principles, and values.
 * It fetches data from an API based on the user's language and displays it.
 *
 * @component
 * @example
 * import Experience from "./Experience";
 *
 * // Inside the parent component's render function:
 * <Experience />
 */
import React, { useEffect, useState } from "react";
import scss from "./Experience.module.scss";
import Content from "./Content/Content";
import Principle from "./Principle/Principle";
import Values from "./Values/Values";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [princpleData, setPrincpleData] = useState([]);
  const [valueData, setValueData] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async (url, setDataFunction) => {
      try {
        const response = await axios.get(url, {
          headers: {
            'Accept-Language': i18n.language,
          }
        });
        const dataWithID = response.data.map((item, index) => ({
          id: index,
          title: item.title,
        }));
        setDataFunction(dataWithID);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    // Fetch data for experience, principles, and values based on the selected language
    fetchData(`${BASE_URL}api/experience/`, setExperienceData);
    fetchData(`${BASE_URL}api/principle/`, setPrincpleData);
    fetchData(`${BASE_URL}api/values/`, setValueData);
  }, [i18n.language]);

  return (
    <div className="container">
      <div className={scss.experience}>
        <div className={scss.experience_title}>
          <h2>{t("experience.exp")}</h2>
        </div>
        <div className={scss.experience_content}>
          {experienceData.map((item) => (
            <Content key={item.id} desc={item.title} />
          ))}
        </div>
        <div className={scss.principle}>
          <h3>{t("principles.princip")}</h3>
          <div className={scss.experience_content}>
            {princpleData.map((item) => (
              <Principle key={item.id} desc={item.title} />
            ))}
          </div>
        </div>
        <div className={scss.values}>
          <div className={scss.values_title}>
            <h2>{t("values.title")}</h2>
            <h4>{t("values.desc")}</h4>
          </div>
          <div className={scss.experience_content}>
            {valueData.map((item) => (
              <Values key={item.id} desc={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
