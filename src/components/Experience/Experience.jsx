import React from "react";
import scss from "./Experience.module.scss";
import Content from "./Content/Content";
import Principle from "./Principle/Principle";
import Values from "./Values/Values";

const Experience = () => {
  const ContentsCards = [
    {
      id: 1,
      desc: "С интеграционными решениями для внешних систем, в том числе, с «Түндүк»",
    },
    {
      id: 2,
      desc: "В составлении бизнес-требований при разработке программного обеспечения",
    },
    {
      id: 3,
      desc: "В разработке программного обеспечения, гибко настраиваемого и изменяемого под потребности клиента через панель администратора без необходимости изменения исходного кода",
    },
    {
      id: 4,
      desc: "В трансформации и оптимизации бизнес-процессов, разработке автоматизированных продуктов В оптимизации технологий для фронт-, мидл- и / или бэк-офиса",
    },
  ];
  const PrincipleCards = [
    { id: 1, desc: "Высокий профессионализм специалистов" },
    { id: 2, desc: "Обширная экспертиза во всех областях ИТ" },
    { id: 3, desc: "Отличное знание специфики отраслевой информатизации" },
    { id: 4, desc: "Использование лучших инновационных решений" },
  ];
  const ValuesCards = [
    {
      id: 1,
      desc: "Мы ответственно подходим к выполнению всех наших обязательств перед заказчиками и персоналом.",
    },
    {
      id: 1,
      desc: "Мы ориентируемся на использование технологий и решений, не наносящих вреда природе.",
    },
    { id: 1, desc: "Мы дорожим своей надежной репутацией." },
  ];

  return (
    <div className="container">
      <div className={scss.experience}>
        <div className={scss.experience_title}>
          <h2>У нашей компании имеется большой опыт работы:</h2>
        </div>
        <div className={scss.experience_content}>
          {ContentsCards.map((item) => (
            <Content key={item.id} desc={item.desc} />
          ))}
        </div>
        <div className={scss.principle}>
          <h3>
            В своей работе над любым проектом My Ticket придерживается следующих
            принципов:
          </h3>
          <div className={scss.experience_content}>
            {PrincipleCards.map((item) => (
              <Principle key={item.id} desc={item.desc} />
            ))}
          </div>
        </div>
        <div className={scss.values}>
          <div className={scss.values_title}>
            <h2>Наши ценности</h2>
            <h4>
              Основополагающим принципом работы MyTicket является добросовестное
              ведение бизнеса.
            </h4>
          </div>
          <div className={scss.experience_content}>
            {ValuesCards.map((item) => (
              <Values key={item.id} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
