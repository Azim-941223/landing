import React from "react";
import scss from "./Product.module.scss";

const Product = (props) => {
  return (
    <div className={scss.product}>
      <div className={scss.product_content}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <img src={props.images} alt="logo" />
      </div>
    </div>
  );
};

export default Product;
