import React from "react";
import s from "./News.module.scss";

import URL from "../../components/URL/URL";
import NewsCard from "../../components/News/NewsCard";
import { usePaginationList } from "../../hooks/usePaginationList";

function News() {
  const news = [
    {
      date: "27 августа 2021 г.",
      title:
        "Реализация намеченных плановых заданий - интересный эксперимент проверки модели развития.",
      isOpen: false,
    },
    {
      date: "27 августа 2021 г.",
      title:
        "Реализация намеченных плановых заданий - интересный эксперимент проверки модели развития.",
      isOpen: false,
    },
    {
      date: "27 августа 2021 г.",
      title:
        "Реализация намеченных плановых заданий - интересный эксперимент проверки модели развития.",
      isOpen: false,
    },
    {
      date: "27 августа 2021 г.",
      title:
        "Реализация намеченных плановых заданий - интересный эксперимент проверки модели развития.",
      isOpen: false,
    },
    {
      date: "27 августа 2021 г.",
      title:
        "Реализация намеченных плановых заданий - интересный эксперимент проверки модели развития.",
      isOpen: false,
    },
    {
      date: "27 августа 2021 г.",
      title:
        "Реализация намеченных плановых заданий - интересный эксперимент проверки модели развития.",
      isOpen: false,
    },
    {
      date: "27 августа 2021 г.",
      title:
        "Реализация намеченных плановых заданий - интересный эксперимент проверки модели развития.",
      isOpen: false,
    },
    {
      date: "27 августа 2021 г.",
      title:
        "Реализация намеченных плановых заданий - интересный эксперимент проверки модели развития.",
      isOpen: false,
    },
  ];

  const {currentItems, showMore} = usePaginationList({
    initialCount: 4,
    step: 4,
    items: news,
  });

  return (
    <section className={s.news}>
      <URL url={["Главная", "Новости"]} />

      <div className={s.container}>
        <h2 className={s.news__title}>
          <span>Новости</span>
        </h2>
        <div className={s.news__wrapper}>
          <div className={s.news__wrapper_left}>
            <div className={s.news__wrapper_left_spisok}>
              {currentItems.map((item, idx) => (
                <NewsCard item={item} id={idx} key={idx} />
              ))}
            </div>
            <button className={`${s.download} ${s.news__wrapper_left_btn}`} onClick={showMore}>
              Загрузить больше
              <span>
                <svg
                  width="8"
                  height="17"
                  viewBox="0 0 8 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 16.3536C3.84171 16.5488 4.15829 16.5488 4.35355 16.3536L7.53553 13.1716C7.7308 12.9763 7.7308 12.6597 7.53553 12.4645C7.34027 12.2692 7.02369 12.2692 6.82843 12.4645L4 15.2929L1.17157 12.4645C0.97631 12.2692 0.659728 12.2692 0.464466 12.4645C0.269203 12.6597 0.269203 12.9763 0.464466 13.1716L3.64645 16.3536ZM3.5 -2.18557e-08L3.5 16L4.5 16L4.5 2.18557e-08L3.5 -2.18557e-08Z"
                    fill="#FF6A39"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className={s.news__wrapper_right}>
            <div className={s.news__wrapper_right_top}>
              <div className={s.news__wrapper_right_top_block}>
                <div className={s.news__wrapper_right_title}>
                  Категории новостей
                </div>
                <ul className={s.news__wrapper_right_spisok}>
                  <li className={s.active}>
                    <a href="/">Все категории</a>
                  </li>
                  <li>
                    <a href="/">Обзоры рынка</a>
                  </li>
                  <li>
                    <a href="/">Изменения в графике работы</a>
                  </li>
                  <li>
                    <a href="/">Новости компании</a>
                  </li>
                  <li>
                    <a href="/">Поздравляем</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={s.news__wrapper_right_bottom}>
              <div className={s.news__wrapper_right_subscribe}>
                <h2 className={s.news__wrapper_right_subscribe_title}>
                  <span>Подписаться на новости</span>
                </h2>
                <div className={s.news__wrapper_right_subscribe_text}>
                  Оставьте ваш E-mail адрес для того, чтобы узнавать новости
                  первыми
                </div>
                <form
                  action="#"
                  className={s.news__wrapper_right_subscribe_form}
                >
                  <div className={s.news__wrapper_right_subscribe_input}>
                    <label htmlFor="">E-mail</label>
                    <input
                      type="email"
                      placeholder="name@e-mail.ru"
                      name="email"
                    />
                  </div>

                  <div className={s.news__wrapper_right_subscribe_submit}>
                    <button className={`btn`} type="submit">
                      Подписаться
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
