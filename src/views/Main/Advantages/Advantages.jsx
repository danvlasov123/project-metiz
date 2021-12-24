import React from "react";
import s from "./Advantages.module.scss";

const advantages = [
  {
    title: " Гарантия высокого качества",
    text: "Выбор надежных производителей, входной контроль качества металла",
  },
  {
    title: "Полная комплектация",
    text: "Сформируем ваш заказ, даже если некоторых позиций нет в нашем официальном прайс-листе",
  },
  {
    title: "Быстрая и качественная металлообработка",
    text: "Возможность расчета онлайн. Исполнение заказа день в день",
  },
  {
    title: "Мы всегда рядом",
    text: "15 офисов и 9 складских комплексов",
  },
  {
    title: "Современная логистика",
    text: "Своевременно. Аккуратно. Сохранно. Технологично. Надежно",
  },
  {
    title: "Индивидуальный подход к клиенту",
    text: "Ориентируемся на потребности клиентов, развиваясь вместе с ними",
  },
  {
    title: "Личный менеджер",
    text: "Единый центр ответственности для клиента",
  },
  {
    title: "Возможность кредитования покупателей",
    text: "Самый выгодный кредит — товарный — на понятных условиях",
  },
];

function Advantages() {
  return (
    <section
      className={s.advantages}
      style={{ backgroundImage: `url(img/figure-ad.png)` }}
    >
      <div className={s.container}>
        <h2 className={s.advantages__title}>
          <span>Преимущества работы с нами</span>
        </h2>
        <div className={s.advantages__wrapper}>
          {advantages.map((el, idx) => (
            <div key={idx} className={s.advantages__wrapper__item}>
              <div className={s.advantages__wrapper__item_title}>
                {el.title}

                <span>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9184 2.85264L7.51783 15.2532C7.40861 15.3624 7.23175 15.3624 7.12278 15.2532L0.0817287 8.2119C-0.0272429 8.10319 -0.0272429 7.92633 0.0817287 7.8171L1.79261 6.10622C1.90184 5.99725 2.07869 5.99725 2.18766 6.10622L7.32056 11.2389L17.8127 0.746707C17.9222 0.637735 18.0985 0.637735 18.2078 0.746707L19.9184 2.45759C20.0276 2.56656 20.0276 2.74316 19.9184 2.85264Z"
                      fill="#FF6A39"
                    />
                  </svg>
                </span>
              </div>
              <div className={s.advantages__wrapper__item_text}>{el.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
