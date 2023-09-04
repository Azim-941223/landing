import React, { useState, useEffect } from "react";
import scss from "./Employees.module.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Employees = () => {
  const { t } = useTranslation();
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Make an Axios GET request to fetch the photo URL
    axios
      .get("https://team3back.sanarip.org/api/photo/")
      .then((response) => {
        const imageUrl = response.data[0]?.url; // Assuming the URL is in the first item of the response array
        if (imageUrl) {
          setBackgroundImage(`url(${imageUrl})`);
        }
      })
      .catch((error) => {
        console.error("Error fetching background image:", error);
      });
  }, []);

  const employeesStyle = {
    height: "90vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundImage: backgroundImage, // Set the dynamic background image here
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
