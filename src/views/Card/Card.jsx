import React from "react";
import s from "./Card.module.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import URL from "../../components/URL/URL";
import SitebarMenu from "../../components/SitebarMenu/SitebarMenu";

function Card() {
  const card = [
    {
      name: "Стальная труба",
      gost: "ГОСТ 28548_90",
      material: "Сталь",
    },
    {
      name: "Стальная труба",
      gost: "ГОСТ 28548_90",
      material: "Сталь",
    },
    {
      name: "Стальная труба",
      gost: "ГОСТ 28548_90",
      material: "Сталь",
    },
    {
      name: "Стальная труба",
      gost: "ГОСТ 28548_90",
      material: "Сталь",
    },

    {
      name: "Электросварные трубы",
      gost: "ГОСТ 10705_80",
      material: "углеродистая / низколегированная сталь",
    },
    {
      name: "ВГП",
      gost: "ГОСТ 3262_75.",
      material: "углеродистая / низколегированная сталь",
    },
    {
      name: "Оцинкованные трубы",
      gost: "",
      material: "Круглые ВГП и электросварные трубы, покрытые слоем цинка",
    },
    {
      name: "Цельнотянутые (бесшовные) трубы",
      gost: "ГОСТ 8732 ГОСТ 8734_75",
      material: "углеродистая /легированная сталь",
    },
  ];

  return (
    <section className={s.card}>
      <URL url={["Главная", "Каталог продукции", "Трубы"]} />

      <div className={s.container}>
        <div className={s.card__wrapper}>
          <SitebarMenu />

          <div className={s.card__content}>
            <div className={s.card__top}>
              <div className={s.card__top_left}>
                <div className={s.card__top_left_main}>
                  <div className={s.card__top_title}>Трубы</div>
                  <div className={s.card__top_subtitle}>
                    Компания ЗАО ТФД «Брок-Инвест-Сервис» предлагает своим
                    клиентам трубы в большом ассортименте (профильного и
                    круглого сечения).
                  </div>
                </div>
                <div className={s.card__top_text}>
                  <span>Стальная труба</span> – изделие из стали
                  кольцеобразного, овального, многоугольного или иной формы
                  полого поперечного сечения относительно большей длины. ГОСТ
                  28548-90
                </div>
                <div className={s.card__top_spisok}>
                  <div className={s.card__top_spisok_title}>
                    Классификация труб по способу их производства:
                  </div>
                  <ul>
                    <li>Круглые бесшовные и круглые сварные;</li>
                    <li>
                      Сварные трубы: вгп, сварные прямошовные и спиралешовные;
                    </li>
                    <li>
                      Прямоугольные и квадратные: профильные трубы и профиль
                      замкнутый;
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className={s.card__top_right}
                style={{ backgroundImage: `url(../img/card/catalog/item-1.jpg)` }}
              ></div>
            </div>

            <div className={s.card__after}>
              <span>
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24L12 12V0H0Z" fill="#030104" />
                  <path d="M20 0V24L32 12V0H20Z" fill="#030104" />
                </svg>
              </span>
              Наша компания является партнером крупнейших производителей
              трубного проката, а также обладает собственной линией по
              производству трубы.
            </div>

            <div className={s.card__text}>
              Далее в разделах нашего каталога Вы можете ознакомиться с
              типоразмерами труб и выбрать необходимый вам ассортимент в
              соответствии с требованиями и условиями эксплуатации трубы.
            </div>

            <div className={s.table_main}>
              <div className={s.card__table}>
                <div className={s.card__table_head}>
                  <div className={s.card__table_row}>
                    <div
                      className={`${s.card__table_column} ${s.card__table_title}`}
                    >
                      Наименование
                    </div>
                    <div
                      className={`${s.card__table_column} ${s.card__table_title}`}
                    >
                      ГОСТ
                    </div>
                    <div
                      className={`${s.card__table_column} ${s.card__table_title}`}
                    >
                      Материал
                    </div>
                  </div>
                </div>

                <SimpleBar
                  className={s.table_main_bar}
                  style={{ maxHeight: 480 }}
                  scrollbarMaxSize={18}
                >
                  <div className={s.card__table_content}>
                    {card.map((item, idx) => (
                      <div className={s.card__table_row} key={idx}>
                        <div
                          className={`${s.card__table_column} ${s.card__table_text}`}
                        >
                          <span>{item.name}</span>
                        </div>
                        <div
                          className={`${s.card__table_column} ${s.card__table_text}`}
                        >
                          <span>{item.gost}</span>
                        </div>
                        <div
                          className={`${s.card__table_column} ${s.card__table_text}`}
                        >
                          <span>{item.material}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </SimpleBar>
              </div>
            </div>

            <div className={s.card__after}>
              <span>
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24L12 12V0H0Z" fill="#030104" />
                  <path d="M20 0V24L32 12V0H20Z" fill="#030104" />
                </svg>
              </span>
              Чтобы получить консультацию по выбору стальных круглых труб,
              уточнить приведенную в прайс_листе стоимость или характеристики
              либо оформить заказ, обратитесь в компанию «Брок-Инвест-Сервис»
              посредством формы online-связи, по номеру (495) 980-98-80 или
              другим способом.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
