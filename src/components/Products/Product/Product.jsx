import React, { useEffect } from "react";
import scss from "./Product.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = (props) => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])
  return (
    <div data-aos="fade-up" data-aos-delay='250' className={scss.product}>
      <div className={scss.product_content}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <img src={props.images} alt="logo" />
      </div>
    </div>
  );
};

export default Product;
