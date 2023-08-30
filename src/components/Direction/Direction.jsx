import React from "react";
import scss from "./Direction.module.scss";

const Direction = () => {
  return (
    <main>
      {/* main directions activities: */}
      <div className="container">
        <div className={scss.direction}>
          <h2>Основные направления деятельности:</h2>
          <div className={scss.direction_block}>
            <div className={scss.direction_desc}>
              <div className={scss.direction_desc_title}>
                <h4>Разработка программного обеспечения</h4>
              </div>
              <div className={scss.direction_desc_title}>
                <h4>Автоматизация бизнес-процессов</h4>
              </div>
              <div className={scss.direction_desc_title}>
                <h4>Разработка технического задания</h4>
              </div>
            </div>
            <div className={scss.direction_desc_about}>
              <div className={scss.direction_desc_description}>
                <p className={scss.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis doloribus nihil porro culpa rerum praesentium
                  inventore doloremque nam, maxime eius aut unde natus deleniti
                  itaque commodi, non veritatis minima ratione dolor qui quas
                  officiis accusantium suscipit ad! In repellat architecto,
                  officiis ullam magnam consequuntur. Labore temporibus sunt
                  quas dolore iure? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Perferendis doloribus nihil porro culpa
                  rerum praesentium inventore doloremque nam, maxime eius aut
                  unde natus deleniti itaque commodi, non veritatis minima
                  ratione dolor qui quas officiis accusantium suscipit ad! In
                  repellat architecto, officiis ullam magnam consequuntur.
                  Labore temporibus sunt quas dolore iure?
                </p>
              </div>
              <div className={scss.direction_desc_images}>
                <img
                  src="https://www.croc.ru/wp-content/uploads/2023/05/main-competence_1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main directions activities end */}
    </main>
  );
};

export default Direction;
