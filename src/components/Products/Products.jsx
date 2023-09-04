import React, { useEffect, useState } from "react";
import scss from "./Products.module.scss";
import Product from "./Product/Product";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import arrow from "../../assets/arrows.png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

const Products = () => {
  const { t, i18n } = useTranslation();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
    });
    axios
      .get(`${BASE_URL}api/products/`,{
        headers: {
          'Accept-Language': i18n.language,
        }
      })
      .then((response) => {
        const withId = response.data.map((item, index) => ({
          id: index,
          title: item.title,
          description: item.description,
          image: item.image,
        }));
        setProductData(withId);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [i18n.language]);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={scss.right_back} onClick={onClick}>
        <img className={scss.arrow} src={arrow} alt="arrow" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={scss.left_back} onClick={onClick}>
        <img className={scss.left_arrow} src={arrow} alt="arrow" />
      </div>
    );
  }

  const settings = {
    dots: false,
    speed: 500,
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={scss.main_products}>
      <div className="container">
        <div className={scss.products}>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={scss.products_title}
          >
            <h2>{t("product.title")}</h2>
            <p>{t("product.desc")}</p>
          </div>
          <Slider {...settings}>
            {productData.map((item) => (
              <Product
                key={item.id}
                title={item.title}
                description={item.description}
                images={item.image}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
