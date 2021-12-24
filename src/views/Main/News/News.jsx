import React from "react";
import s from "./News.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Navigation } from "swiper";

function News() {
  return (
    <section className={s.news}>
      <div className={s.container}>
        <h2 className={s.news__title}>
          <span>Блок последних новостей</span>
        </h2>
        <button className={s.news__watch}>
          <span>
            Посмотреть <br /> все новости
          </span>
        </button>
        
        <div className={s.news__wrapper}>
          <div className={s.news__wrapper__slider}>
            <div className={s.news__wrapper__slider_top}>
              <div className={s.news__wrapper__slider_date}>
                27 октября 2021 г.
                <a href="/" className={s.news__wrapper__slider_title}>
                  Реализация намеченных плановых заданий-интересный эксперимент
                  проверки модели развития.
                </a>
                <div className={s.news__wrapper__slider_text}>
                  Прежде всего, реализация намеченных плановых заданий
                  представляет собой интересный эксперимент проверки модели
                  развития. Значимость этих проблем настолько очевидна, что
                  семантический разбор внешних противодействий однозначно
                  определяет каждого участника.
                </div>
                <button className={s.news__wrapper__slider_read}>
                  Читать новость
                  <span>
                    <svg
                      width="17"
                      height="8"
                      viewBox="0 0 17 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659728 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM0 4.5H16V3.5H0V4.5Z"
                        fill="#242424"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className={s.news__wrapper__slider_bottom}>
              <Swiper
                spaceBetween={40}
                slidesPerView={2}
                modules={[Grid, Pagination, Navigation]}
                breakpoints={{
                  800: {
                    slidesPerView: 2,
                  },
                  320: {
                    grid: {
                      rows: 2,
                      fill: "rows",
                    },
                    spaceBetween: 0,
                    slidesPerView: 1,
                  },
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {new Array(8).fill(null).map((el, idx) => (
                  <SwiperSlide
                    key={idx}
                    className={s.news__wrapper__slider_item}
                  >
                    <div className={s.news__wrapper__slider_subdate}>
                      27 октября 2021 г.
                      <a href="/">
                        <svg
                          width="33"
                          height="8"
                          viewBox="0 0 33 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32.4375 4.35355C32.6328 4.15829 32.6328 3.84171 32.4375 3.64645L29.2556 0.464466C29.0603 0.269204 28.7437 0.269204 28.5485 0.464466C28.3532 0.659728 28.3532 0.976311 28.5485 1.17157L31.3769 4L28.5485 6.82843C28.3532 7.02369 28.3532 7.34027 28.5485 7.53553C28.7437 7.7308 29.0603 7.7308 29.2556 7.53553L32.4375 4.35355ZM0 4.5H32.084V3.5H0V4.5Z"
                            fill="#FF6A39"
                          />
                        </svg>
                      </a>
                    </div>
                    <a href="/" className={s.news__wrapper__slider_subtitle}>
                      Реализация намеченных плановых заданий-интересный
                      эксперимент проверки модели развития.
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={s.swiper__slider__arrows}>
                <button
                  className={`${s.swiper__button__prev} swiper-button-prev`}
                >
                  <svg
                    width="26"
                    height="16"
                    viewBox="0 0 26 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM26 9H1V7H26V9Z"
                      fill="#242424"
                    />
                  </svg>
                </button>

                <button
                  className={`${s.swiper__button__next} swiper-button-next`}
                >
                  <svg
                    width="26"
                    height="16"
                    viewBox="0 0 26 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z"
                      fill="#242424"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className={s.news__wrapper__subscribe}>
            <h2 className={s.news__wrapper__subscribe_title}>
              <span>Подписаться на новости</span>
            </h2>
            <div className={s.news__wrapper__subscribe_text}>
              Оставьте ваш E-mail адрес для того, чтобы узнавать новости первыми
            </div>
            <div className={s.news__wrapper__subscribe_wrapper}>
              <div className={s.news__wrapper__subscribe_label}>E-mail</div>
              <form className={s.news__wrapper__subscribe_block}>
                <input type="email" placeholder="name@e-mail.ru" />
                <button
                  type="submit"
                  className={`btn ${s.news__wrapper__subscribe_submit}`}
                >
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={s.news__line}>
        <img src="../img/line-bg.svg" alt="" />
      </div>
    </section>
  );
}

export default News;
