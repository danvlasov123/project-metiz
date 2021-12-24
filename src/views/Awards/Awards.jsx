import React from "react";
import s from "./Awards.module.scss";

import URL from "../../components/URL/URL";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Navigation } from "swiper";

function Awards() {
  const AwardsList = [
    {
      img: "/img/awards/catalog/item-1.jpg",
      year: "2019",
      title: "“Лучшая сбытовая сеть России’2019”",
      text: "Лучшая сбытовая сеть по динамике развития",
    },
    {
      img: "/img/awards/catalog/item-2.jpg",
      year: "2019",
      title: "Лучшая Металлобаза России’2019",
      text: "Лучшая металлобаза по эффективности работы и динамике развития",
    },
    {
      img: "/img/awards/catalog/item-3.jpg",
      year: "2019",
      title: "Лучший СМЦ России’2019",
      text: "За высокую динамику развития",
    },
    {
      img: "/img/awards/catalog/item-4.jpg",
      year: "2018",
      title: "Лучшая сбытовая сеть России’2018",
      text: "По уровню и методам организации сбыта и поставок металлопродукции и уровню профессионализма персонала сбытовых служб",
    },
    {
      img: "/img/awards/catalog/item-5.jpg",
      year: "2017",
      title: "Лучшая сбытовая сеть России’2017",
      text: "Лучшая федеральная сбытовая сеть по производительности",
    },
    {
      img: "/img/awards/catalog/item-6.jpg",
      year: "2015",
      title: "Лучший сервисный металлоцентр России’2015",
      text: "За широкий спектр услуг получил СК «Октябрьский» Брок-Инвест-Сервиса",
    },
    {
      img: "/img/awards/catalog/item-7.jpg",
      year: "2012",
      title: "Лучший Сервисный Металло-Центр России’2012",
      text: "За высокую эффективность работы",
    },
    {
      img: "/img/awards/catalog/item-8.jpg",
      year: "2017",
      title: "Лучшая сбытовая сеть России’2012",
      text: "Лучшая сбытовая сеть регионального уровня",
    },
    {
      img: "/img/awards/catalog/item-1.jpg",
      year: "2019",
      title: "“Лучшая сбытовая сеть России’2019”",
      text: "Лучшая сбытовая сеть по динамике развития",
    },
    {
      img: "/img/awards/catalog/item-2.jpg",
      year: "2019",
      title: "Лучшая Металлобаза России’2019",
      text: "Лучшая металлобаза по эффективности работы и динамике развития",
    },
    {
      img: "/img/awards/catalog/item-3.jpg",
      year: "2019",
      title: "Лучший СМЦ России’2019",
      text: "За высокую динамику развития",
    },
    {
      img: "/img/awards/catalog/item-4.jpg",
      year: "2018",
      title: "Лучшая сбытовая сеть России’2018",
      text: "По уровню и методам организации сбыта и поставок металлопродукции и уровню профессионализма персонала сбытовых служб",
    },
    {
      img: "/img/awards/catalog/item-5.jpg",
      year: "2017",
      title: "Лучшая сбытовая сеть России’2017",
      text: "Лучшая федеральная сбытовая сеть по производительности",
    },
    {
      img: "/img/awards/catalog/item-6.jpg",
      year: "2015",
      title: "Лучший сервисный металлоцентр России’2015",
      text: "За широкий спектр услуг получил СК «Октябрьский» Брок-Инвест-Сервиса",
    },
    {
      img: "/img/awards/catalog/item-7.jpg",
      year: "2012",
      title: "Лучший Сервисный Металло-Центр России’2012",
      text: "За высокую эффективность работы",
    },
    {
      img: "/img/awards/catalog/item-8.jpg",
      year: "2017",
      title: "Лучшая сбытовая сеть России’2012",
      text: "Лучшая сбытовая сеть регионального уровня",
    },
  ];

  return (
    <section className={s.awards}>
      <URL url={["Главная", "Награды"]} />

      <div className={s.container}>
        <div className={s.awards__top}>
          <div className={s.awards__top_left}>
            <h2 className={s.awards__top_title}>
              <span>Корпоративные награды</span>
            </h2>
            <div className={s.awards__top_text}>
              Все подробности о текущих ценах у вашего персонального менеджера
            </div>
          </div>

          <div className={s.awards__top_right}>
            <span>Текст про количество, важность и гордость наград</span>
          </div>
          <div className={s.awards__top_line}>
            <img src="../img/line-bg-2.svg" alt="" />
          </div>
        </div>

        <div className={s.awards__wrapper}>
          <Swiper
            spaceBetween={20}
            slidesPerGroup={8}
            modules={[Grid, Pagination, Navigation]}
            grid={{
              rows: 2,
              fill: "rows",
            }}
            pagination={{
              type: "fraction",
              el: `.awards__pagination`,
              clickable: true,
            }}
            breakpoints={{
              1400: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                  fill: "rows",
                },
              },
              900: {
                slidesPerView: 3,
                grid: {
                  rows: 3,
                  fill: "rows",
                },
              },
              800: {
                slidesPerView: 3,
                grid: {
                  rows: 3,
                  fill: "rows",
                },
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                grid: {
                  rows: 4,
                  fill: "rows",
                },
                spaceBetween: 20,
              },
              320: {
                spaceBetween: 20,
                slidesPerView: 1,
                grid: {
                  rows: 8,
                  fill: "rows",
                },
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {AwardsList.map((el, idx) => (
              <SwiperSlide key={idx} className={s.awards__wrapper_item}>
                <div
                  className={s.awards__wrapper_item_img}
                  style={{ backgroundImage: `url(${el.img})` }}
                ></div>
                <div className={s.awards__wrapper_item_content}>
                  <div className={s.awards__wrapper_item_year}>
                    <div>
                      Год: <span>{el.year}</span>
                    </div>
                  </div>
                  <div className={s.awards__wrapper_item_block}>
                    <div className={s.awards__wrapper_item_title}>
                      {el.title}
                    </div>
                    <div className={s.awards__wrapper_item_text}>{el.text}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className={s.awards__wrapper_download}>
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
                  d="M3.64645 16.3887C3.84171 16.584 4.15829 16.584 4.35355 16.3887L7.53553 13.2067C7.7308 13.0115 7.7308 12.6949 7.53553 12.4996C7.34027 12.3044 7.02369 12.3044 6.82843 12.4996L4 15.328L1.17157 12.4996C0.97631 12.3044 0.659728 12.3044 0.464466 12.4996C0.269203 12.6949 0.269203 13.0115 0.464466 13.2067L3.64645 16.3887ZM3.5 0.0351562L3.5 16.0352L4.5 16.0352L4.5 0.0351563L3.5 0.0351562Z"
                  fill="#FF6A39"
                />
              </svg>
            </span>
          </button>

          <div className={s.awards__wrapper_info}>
            <div className={`awards__pagination ${s.awards__pagination}`}></div>
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
      </div>
    </section>
  );
}

export default Awards;
