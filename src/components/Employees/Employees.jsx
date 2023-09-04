/**
 * Employees Component
 *
 * This component displays information about employees with a background image fetched from an API.
 * It fetches the background image and uses it as a cover for the component.
 *
 * @component
 * @example
 * import Employees from "./Employees";
 *
 * // Inside the parent component's render function:
 * <Employees />
 */
import React, { useState, useEffect } from "react";
import scss from "./Employees.module.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

const Employees = () => {
  const { t } = useTranslation();
  const [backgroundImage, setBackgroundImage] = useState("");

  // Fetch the background image from an API
  useEffect(() => {
    axios
      .get(`${BASE_URL}api/photo/`)
      .then((response) => {
        const imageUrl = response.data[0]?.url;
        if (imageUrl) {
          setBackgroundImage(`url(${imageUrl})`);
        }
      })
      .catch((error) => {
        console.error("Error fetching background image:", error);
      });
  }, []);

  // Inline style for the component with the fetched background image
  const employeesStyle = {
    height: "90vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundImage: backgroundImage,
  };

  return (
    <div className={scss.employees} style={employeesStyle}>
      <div>
        <h2>{t("employees.title")}</h2>
        <p>{t("employees.desc")}</p>
      </div>
    </div>
  );
};

export default Employees;
