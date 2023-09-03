import React from "react";
import scss from "./Employees.module.scss";
import { useTranslation } from "react-i18next";
// import axios from "axios";

const Employees = () => {
  const { t } = useTranslation();
  // const [photoData, setPhotoData] = useState({});
  // console.log(photoData);

  // useEffect(() => {
  //   axios
  //     .get("https://team3back.sanarip.org/api/photo/")
  //     .then((response) => {
  //       // Assuming the response data is an object with the required photo data
  //       setPhotoData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching photo data:", error);
  //     });
  // }, []);
  return (
    <div className={scss.employees}>
      <div>
        <h2>{t("employees.title")}</h2>
        <p>
        {t("employees.desc")}
        </p>
      </div>
    </div>
  );
};

export default Employees;
