import React from "react";
import s from "./Catalog.module.scss";

const catalog = [
  {
    title: "Лист",
    text: "горячекатаный, холоднокатаный, оцинкованный, профнастил",
    image: "item-1.jpg",
  },
  {
    title: "Трубы",
    text: "ВГП, ЭСПШ, профильные",
    image: "item-2.jpg",
  },
  {
    title: "Фасон",
    text: "балка, швеллер, уголок",
    image: "item-3.jpg",
  },
  {
    title: "Арматура",
    text: "А1, 25Г2С, А500С",
    image: "item-4.jpg",
  },
  {
    title: "Сорт",
    text: "квадрат, полоса, лента",
    image: "item-5.jpg",
  },
  {
    title: "Сварочные материалы",
    text: "электроды, сварочная проволока",
    image: "item-6.jpg",
  },
  {
    title: "Метизы",
    text: "электроды, стальная проволока",
    image: "item-7.jpg",
  },
  {
    title: "Сетка сварная",
    text: "электроды, сварочная проволока",
    image: "item-8.jpg",
  },
];

function Catalog() {
  return (
    <section className={s.catalog}>
      <div className={s.container}>
        <h2 className={s.catalog__title}>
          <span>Каталог продукции</span>
        </h2>
        <div className={s.catalog__wrapper}>
          {catalog.map((el, idx) => (
            <a href="/"
              key={idx}
              className={s.catalog__wrapper__item}
              style={{ backgroundImage: `url(img/catalog/${el.image})` }}
            >
              <div className={s.catalog__wrapper__item_block}>
                <div className={s.catalog__wrapper__item_title}>
                  {el.title}
                  <span>
                    <img src="../img/arrow-white.svg" alt="" />
                  </span>
                </div>
                <div className={s.catalog__wrapper__item_text}>{el.text}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className={s.catalog__line}>
        <img src="../img/line-bg.svg" alt="" />
      </div>
    </section>
  );
}

export default Catalog;
