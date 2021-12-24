import React from "react";
import s from "./Catalog.module.scss";

import URL from "../../components/URL/URL";
import SitebarMenu from "../../components/SitebarMenu/SitebarMenu";

function Catalog() {
  return (
    <section className={s.catalog}>
      <URL url={["Главная", "Каталог продукции"]} />

      <div className={s.container}>
        <div className={s.catalog__wrapper}>
          <SitebarMenu />

          <div className={s.catalog__content}>
            <div className={s.catalog__block}>
              <div className={s.catalog__main}>
                <div className={s.catalog__block_item}>
                  <div className={s.catalog__block_item_top}>
                    <a href="/" className={s.catalog__block_title}>
                      Лист
                      <span>
                        <svg
                          width="40"
                          height="28"
                          viewBox="0 0 40 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14.3721"
                            cy="14.0002"
                            r="13"
                            stroke="white"
                          />
                          <path
                            d="M39.0792 14.7074C39.4697 14.3168 39.4697 13.6837 39.0792 13.2931L32.7152 6.92918C32.3247 6.53865 31.6915 6.53865 31.301 6.92918C30.9105 7.3197 30.9105 7.95287 31.301 8.34339L36.9579 14.0002L31.301 19.6571C30.9105 20.0476 30.9105 20.6808 31.301 21.0713C31.6915 21.4618 32.3247 21.4618 32.7152 21.0713L39.0792 14.7074ZM14.3721 15.0002H38.3721V13.0002H14.3721V15.0002Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                    <ul className={s.catalog__block_spisok}>
                      <li>
                        <a href="/">горячекатаный,</a>
                      </li>
                      <li>
                        <a href="/">холоднокатаный,</a>
                      </li>
                      <li>
                        <a href="/">оцинкованный,</a>
                      </li>
                      <li>
                        <a href="/">профнастил </a>
                      </li>
                    </ul>
                  </div>

                  <div className={s.catalog__block_item_bottom}>
                    <a href="/" className={s.catalog__block_title}>
                      Сорт
                      <span>
                        <svg
                          width="40"
                          height="28"
                          viewBox="0 0 40 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14.3721"
                            cy="14.0002"
                            r="13"
                            stroke="white"
                          />
                          <path
                            d="M39.0792 14.7074C39.4697 14.3168 39.4697 13.6837 39.0792 13.2931L32.7152 6.92918C32.3247 6.53865 31.6915 6.53865 31.301 6.92918C30.9105 7.3197 30.9105 7.95287 31.301 8.34339L36.9579 14.0002L31.301 19.6571C30.9105 20.0476 30.9105 20.6808 31.301 21.0713C31.6915 21.4618 32.3247 21.4618 32.7152 21.0713L39.0792 14.7074ZM14.3721 15.0002H38.3721V13.0002H14.3721V15.0002Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                    <ul className={s.catalog__block_spisok}>
                      <li>
                        <a href="/">квадрат,</a>
                      </li>
                      <li>
                        <a href="/">полоса,</a>
                      </li>
                      <li>
                        <a href="/">лента</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={s.catalog__block_item}>
                  <div className={s.catalog__block_item_top}>
                    <a href="/" className={s.catalog__block_title}>
                      Трубы
                      <span>
                        <svg
                          width="40"
                          height="28"
                          viewBox="0 0 40 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14.3721"
                            cy="14.0002"
                            r="13"
                            stroke="white"
                          />
                          <path
                            d="M39.0792 14.7074C39.4697 14.3168 39.4697 13.6837 39.0792 13.2931L32.7152 6.92918C32.3247 6.53865 31.6915 6.53865 31.301 6.92918C30.9105 7.3197 30.9105 7.95287 31.301 8.34339L36.9579 14.0002L31.301 19.6571C30.9105 20.0476 30.9105 20.6808 31.301 21.0713C31.6915 21.4618 32.3247 21.4618 32.7152 21.0713L39.0792 14.7074ZM14.3721 15.0002H38.3721V13.0002H14.3721V15.0002Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                    <ul className={s.catalog__block_spisok}>
                      <li>
                        <a href="/">ВГП,</a>
                      </li>
                      <li>
                        <a href="/">ЭСПШ,</a>
                      </li>
                      <li>
                        <a href="/">профильные</a>
                      </li>
                    </ul>
                  </div>

                  <div className={s.catalog__block_item_bottom}>
                    <a href="/" className={s.catalog__block_title}>
                      Сварочные материалы
                      <span>
                        <svg
                          width="40"
                          height="28"
                          viewBox="0 0 40 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14.3721"
                            cy="14.0002"
                            r="13"
                            stroke="white"
                          />
                          <path
                            d="M39.0792 14.7074C39.4697 14.3168 39.4697 13.6837 39.0792 13.2931L32.7152 6.92918C32.3247 6.53865 31.6915 6.53865 31.301 6.92918C30.9105 7.3197 30.9105 7.95287 31.301 8.34339L36.9579 14.0002L31.301 19.6571C30.9105 20.0476 30.9105 20.6808 31.301 21.0713C31.6915 21.4618 32.3247 21.4618 32.7152 21.0713L39.0792 14.7074ZM14.3721 15.0002H38.3721V13.0002H14.3721V15.0002Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                    <ul className={s.catalog__block_spisok}>
                      <li>
                        <a href="/">электроды,</a>
                      </li>
                      <li>
                        <a href="/">сварочная проволока</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={s.catalog__block_item}>
                  <div className={s.catalog__block_item_top}>
                    <a href="/" className={s.catalog__block_title}>
                      Фасон
                      <span>
                        <svg
                          width="40"
                          height="28"
                          viewBox="0 0 40 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14.3721"
                            cy="14.0002"
                            r="13"
                            stroke="white"
                          />
                          <path
                            d="M39.0792 14.7074C39.4697 14.3168 39.4697 13.6837 39.0792 13.2931L32.7152 6.92918C32.3247 6.53865 31.6915 6.53865 31.301 6.92918C30.9105 7.3197 30.9105 7.95287 31.301 8.34339L36.9579 14.0002L31.301 19.6571C30.9105 20.0476 30.9105 20.6808 31.301 21.0713C31.6915 21.4618 32.3247 21.4618 32.7152 21.0713L39.0792 14.7074ZM14.3721 15.0002H38.3721V13.0002H14.3721V15.0002Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                    <ul className={s.catalog__block_spisok}>
                      <li>
                        <a href="/">балка,</a>
                      </li>
                      <li>
                        <a href="/">швеллер,</a>
                      </li>
                      <li>
                        <a href="/">угол,</a>
                      </li>
                      <li>
                        <a href="/">профнастил </a>
                      </li>
                    </ul>
                  </div>

                  <div className={s.catalog__block_item_bottom}>
                    <a href="/" className={s.catalog__block_title}>
                      Метизы
                      <span>
                        <svg
                          width="40"
                          height="28"
                          viewBox="0 0 40 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14.3721"
                            cy="14.0002"
                            r="13"
                            stroke="white"
                          />
                          <path
                            d="M39.0792 14.7074C39.4697 14.3168 39.4697 13.6837 39.0792 13.2931L32.7152 6.92918C32.3247 6.53865 31.6915 6.53865 31.301 6.92918C30.9105 7.3197 30.9105 7.95287 31.301 8.34339L36.9579 14.0002L31.301 19.6571C30.9105 20.0476 30.9105 20.6808 31.301 21.0713C31.6915 21.4618 32.3247 21.4618 32.7152 21.0713L39.0792 14.7074ZM14.3721 15.0002H38.3721V13.0002H14.3721V15.0002Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                    <ul className={s.catalog__block_spisok}>
                      <li>
                        <a href="/">электроды,</a>
                      </li>
                      <li>
                        <a href="/">стальная проволока</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={s.catalog__block_item}>
                  <div className={s.catalog__block_item_top}>
                    <a href="/" className={s.catalog__block_title}>
                      Арматура
                      <span>
                        <svg
                          width="40"
                          height="28"
                          viewBox="0 0 40 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14.3721"
                            cy="14.0002"
                            r="13"
                            stroke="white"
                          />
                          <path
                            d="M39.0792 14.7074C39.4697 14.3168 39.4697 13.6837 39.0792 13.2931L32.7152 6.92918C32.3247 6.53865 31.6915 6.53865 31.301 6.92918C30.9105 7.3197 30.9105 7.95287 31.301 8.34339L36.9579 14.0002L31.301 19.6571C30.9105 20.0476 30.9105 20.6808 31.301 21.0713C31.6915 21.4618 32.3247 21.4618 32.7152 21.0713L39.0792 14.7074ZM14.3721 15.0002H38.3721V13.0002H14.3721V15.0002Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                    <ul className={s.catalog__block_spisok}>
                      <li>
                        <a href="/">А1,</a>
                      </li>
                      <li>
                        <a href="/">25Г2С,</a>
                      </li>
                      <li>
                        <a href="/">А500С</a>
                      </li>
                    </ul>
                  </div>

                  <div className={s.catalog__block_item_bottom}>
                    <a href="/" className={s.catalog__block_title}>
                      Сетка сварная
                      <span>
                        <svg
                          width="40"
                          height="28"
                          viewBox="0 0 40 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14.3721"
                            cy="14.0002"
                            r="13"
                            stroke="white"
                          />
                          <path
                            d="M39.0792 14.7074C39.4697 14.3168 39.4697 13.6837 39.0792 13.2931L32.7152 6.92918C32.3247 6.53865 31.6915 6.53865 31.301 6.92918C30.9105 7.3197 30.9105 7.95287 31.301 8.34339L36.9579 14.0002L31.301 19.6571C30.9105 20.0476 30.9105 20.6808 31.301 21.0713C31.6915 21.4618 32.3247 21.4618 32.7152 21.0713L39.0792 14.7074ZM14.3721 15.0002H38.3721V13.0002H14.3721V15.0002Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                    <ul className={s.catalog__block_spisok}>
                      <li>
                        <a href="/">электроды,</a>
                      </li>
                      <li>
                        <a href="/">сварочная проволока</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
