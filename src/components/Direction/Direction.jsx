/**
 * Direction Component
 *
 * This component displays information about different practice directions.
 * It fetches data from an API based on the selected language and provides a responsive UI
 * to display information on desktop and mobile devices.
 *
 * @component
 * @example
 * import Direction from "./Direction";
 *
 * // Inside the parent component's render function:
 * <Direction />
 */
import React, { useState, useEffect } from "react";
import scss from "./Direction.module.scss";
import axios from "axios";
import { BASE_URL } from "./../constants/constants";
import { useTranslation } from "react-i18next";

const Direction = () => {
  const { t, i18n } = useTranslation();
  const [practiceData, setPracticeData] = useState([]);
  const [selectedPractice, setSelectedPractice] = useState(practiceData[0]);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  // Fetch practice data based on language selection
  useEffect(() => {
    const fetchPracticeData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/practice/`, {
          headers: {
            "Accept-Language": i18n.language,
          },
        });
        setPracticeData(response.data);
      } catch (error) {
        console.error("Error fetching practice data:", error);
      }
    };
    fetchPracticeData();
  }, [i18n.language]);

  // Set the selected practice when practice data is available
  useEffect(() => {
    if (practiceData.length > 0) {
      setSelectedPractice(practiceData[0]);
    }
  }, [practiceData]);

  // Update the isDesktop state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle practice selection
  const handlePracticeSelect = (practice) => {
    setSelectedPractice(practice);
  };

  return (
    <main>
      <div className="container">
        <div className={scss.direction}>
          <h2>{t("directions.direc")}</h2>
          <div className={scss.direction_block}>
            {isDesktop ? (
              // Desktop version
              <>
                <div className={scss.direction_desc}>
                  {practiceData.map((item) => (
                    <div
                      key={item.title}
                      onClick={() => handlePracticeSelect(item)}
                      className={
                        selectedPractice === item
                          ? scss.direction_desc_title_active
                          : scss.direction_desc_title
                      }
                    >
                      <h4>{item.title}</h4>
                    </div>
                  ))}
                </div>
                <div className={scss.direction_desc_about}>
                  <div className={scss.direction_desc_description}>
                    {selectedPractice && (
                      <p className={scss.desc}>
                        {selectedPractice.description}
                      </p>
                    )}
                  </div>
                  <div className={scss.direction_desc_images}>
                    {selectedPractice && (
                      <img src={selectedPractice.image} alt="" />
                    )}
                  </div>
                </div>
              </>
            ) : (
              // Mobile version
              <>
                {practiceData.map((item) => (
                  <div key={item.title} className={scss.direction_desc_mobile}>
                    <div
                      onClick={() =>
                        setSelectedTitle(
                          selectedTitle === item.title ? null : item.title
                        )
                      }
                      className={
                        selectedTitle === item.title
                          ? `${scss.direction_desc_title} ${scss.direction_desc_title_active}`
                          : scss.direction_desc_title
                      }
                    >
                      <h4>{item.title}</h4>
                      <span className={scss.arrow}></span>
                    </div>
                    {selectedTitle === item.title && (
                      <div className={scss.direction_desc_about}>
                        <div className={scss.direction_desc_description}>
                          <p className={scss.desc}>{item.description}</p>
                        </div>
                        <div className={scss.direction_desc_images}>
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Direction;
