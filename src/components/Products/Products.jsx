import React from "react";
import scss from "./Products.module.scss";
import Product from "./Product/Product";
import Slider from "react-slick";

const Products = () => {
  const ProductCards = [
    {
      id: 1,
      title: "Технический осмотр",
      description:
        "Аналитическая информационная система технического осмотра автотранспортных средств для Министерства экономики КР",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Kyrgyz_Ministry_of_Finance.png",
    },
    {
      id: 2,
      title: "Эталонная база данных",
      description:
        'АИС "Эталонная база данных" Государственной Таможенной Службы КР для UNODC',
      images:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Kyrgyz_Ministry_of_Finance.png",
    },
    {
      id: 3,
      title: "FinMarket",
      description:
        "Цифровая финансовая платформа для ОЮЛ “Союз Банков Кыргызстана” при поддержке USAID",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Kyrgyz_Ministry_of_Finance.png",
    },
    {
      id: 1,
      title: "Технический осмотр",
      description:
        "Аналитическая информационная система технического осмотра автотранспортных средств для Министерства экономики КР",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Kyrgyz_Ministry_of_Finance.png",
    },
    {
      id: 2,
      title: "Эталонная база данных",
      description:
        'АИС "Эталонная база данных" Государственной Таможенной Службы КР для UNODC',
      images:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Kyrgyz_Ministry_of_Finance.png",
    },
    {
      id: 3,
      title: "FinMarket",
      description:
        "Цифровая финансовая платформа для ОЮЛ “Союз Банков Кыргызстана” при поддержке USAID",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Kyrgyz_Ministry_of_Finance.png",
    },
  ];

  const settings = {
    dots: false,
    speed: 500,
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className={scss.products}>
        <div className={scss.products_title}>
          <h1>Наши продукты</h1>
          <p>
            Компания My Ticket имеет опыт в реализации проектов высокой
            сложности для государственных и финансовых организаций:
          </p>
        </div>
        <Slider {...settings}>
          {ProductCards.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              description={item.description}
              images={item.images}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
