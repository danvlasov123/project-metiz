import React from "react";
import s from "./Suppliers.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Navigation } from "swiper";

function Suppliers() {
  const supp = [
    {
      imageName: "item-1.png",
    },
    {
      imageName: "item-2.png",
    },
    {
      imageName: "item-3.png",
    },
    {
      imageName: "item-4.png",
    },
    {
      imageName: "item-5.png",
    },
    {
      imageName: "item-6.png",
    },
    {
      imageName: "item-7.png",
    },
    {
      imageName: "item-8.png",
    },
    {
      imageName: "item-1.png",
    },
    {
      imageName: "item-2.png",
    },
    {
      imageName: "item-3.png",
    },
    {
      imageName: "item-4.png",
    },
    {
      imageName: "item-5.png",
    },
    {
      imageName: "item-6.png",
    },
    {
      imageName: "item-7.png",
    },
    {
      imageName: "item-8.png",
    },
  ];

  return (
    <section className={s.suppliers}>
      <div className="container">
        <h2 className={s.suppliers__title}>
          <span>Поставщики</span>
        </h2>
        <div className={s.suppliers__slider}>
          <Swiper
            modules={[Grid, Pagination, Navigation]}
            slidesPerView={4}
            grid={{
              rows: 2,
              fill: "rows",
            }}
            pagination={{
              type: "fraction",
              el: `.swiper__pagination`,
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            className={s.suppliers__wrapper}
            breakpoints={{
              1000: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                  fill: "rows",
                },
              },
              800: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                  fill: "rows",
                },
              },
              320: {
                slidesPerView: 2,
                grid: {
                  rows: 4,
                  fill: "rows",
                },
                pagination: {
                  type: "bullets",
                  el: `.swiper__pagination`,
                },
              },
            }}
            slidesPerGroup={8}
          >
            <div className={s.swiper__wrapper}>
              {supp.map((el, idx) => (
                <SwiperSlide key={idx} className={s.suppliers__wrapper__item}>
                  <img src={`img/suppliers/${el.imageName}`} alt="" />
                </SwiperSlide>
              ))}
            </div>

            <div className={`swiper__pagination ${s.swiper__pagination}`}></div>
          </Swiper>

          <div className={s.suppliers__slider__arrows}>
            <button className={`${s.swiper__prev} swiper-prev`}>
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

            <button className={`${s.swiper__next} swiper-next`}>
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
    </section>
  );
}

export default Suppliers;
