import React, { useState } from "react";
import s from "./Banner.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Navigation, EffectFade, Autoplay } from "swiper";

function Banner() {
  const banners = [
    {
      bannerUrl: "img/banners/banner-1.jpg",
      title: "Металлопрокат",
      text: "широкий ассортимент и гарантия качества",
    },
    {
      bannerUrl: "img/banners/banner-2.jpg",
      title: "Производство",
      text: "ваши желания - наши возможности",
    },
    {
      bannerUrl: "img/banners/banner-3.jpg",
      title: "Металлообработка",
      text: "от простой до высокотехнологичной",
    },
  ];

  const [numberActiveSlide, setNumberActiveSlide] = useState(1);

  function changeNumberSlide() {
    setTimeout(() => {
      const bannerSlider = document.querySelectorAll(".banner__slide");

      bannerSlider.forEach((el, idx) => {
        if (el.classList.contains("swiper-slide-active"))
          setNumberActiveSlide(idx + 1);
      });
    }, 1);
  }

  return (
    <section className={`${s.banner} banner`}>
      <Swiper
        modules={[Grid, Pagination, Navigation, EffectFade, Autoplay]}
        pagination={{
          type: "bullets",
          el: `.banner__pagination`,
          clickable: true,
          renderBullet: (idx, className) => {
            return `<span class="${className} ${s.banner__pagination_bullet}"></span>`;
          },
        }}
        onSlideChange={changeNumberSlide}
      >
        {banners.map((el, idx) => (
          <SwiperSlide
            key={idx}
            style={{ backgroundImage: `url(${el.bannerUrl})` }}
            className={`banner__slide ${s.banner__slide}`}
          >
            <div className={s.container}>
              <h1 className={s.banner__title}>{el.title}</h1>
              <div className={s.banner__text}>{el.text}</div>
              <button className={`btn ${s.banner__btn}`}>
                Перейти в каталог
              </button>
            </div>
          </SwiperSlide>
        ))}

        <div className={s.banner__info_slider}>
          <div className={s.banner__info_slider_counter}>
            <div className={s.banner__info_slider_number}>
              {numberActiveSlide}
            </div>
            <span>/</span>
            <div className={s.banner__info_slider_quantity}>
              {banners.length}
            </div>
          </div>
          <div className={`banner__pagination ${s.banner__pagination}`}></div>
        </div>
      </Swiper>
    </section>
  );
}

export default Banner;
