import React from "react";
import s from "./Footer.module.scss";

function Footer() {
  const city = [
    {
      nameCity: "Владимир",
      phone: "+7 (4922) 49-43-20",
    },
    {
      nameCity: "Люберцы",
      phone: "+7 (495) 980-97-75",
    },
    {
      nameCity: "Санкт-Петербург",
      phone: "+7 (812) 309-02-52",
    },
    {
      nameCity: "Екатеринбург",
      phone: "+7 (343) 000-00-00",
    },
    {
      nameCity: "Нижний Новгород",
      phone: "+7 (831) 429-06-25",
    },
    {
      nameCity: "Сергиев Посад",
      phone: "+7 (496) 551-04-19",
    },
    {
      nameCity: "Казань",
      phone: "+7 (843) 206-07-06",
    },
    {
      nameCity: "Обнинск",
      phone: "+7 (48439) 9-61-45",
    },
    {
      nameCity: "Тверь",
      phone: "+7 (4822) 62-00-10",
    },
    {
      nameCity: "Клин",
      phone: "+7 (496) 249-82-88",
    },
    {
      nameCity: "Ростов-на-Дону",
      phone: "+7 (863) 303-67-23",
    },
    {
      nameCity: "Тула",
      phone: "+7 (4872) 25-08-90",
    },
    {
      nameCity: "Краснодар",
      phone: "+7 (861) 203-40-05",
    },
    {
      nameCity: "Рязань",
      phone: "+7 (4912) 46-65-06",
    },
    {
      nameCity: "Ярославль",
      phone: "+7 (4852) 69-53-23",
    },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.footer__line}>
        <img src="../img/line-bg.svg" alt="" />
      </div>

      <div className="container">
        <div className={s.footer__wrapper}>
          <div className={s.footer__wrapper__left}>
            <div className={s.footer__wrapper__left_logo}>
              <img src="../img/logo-2.svg" alt="" />
            </div>
            <div className={s.footer__wrapper__left_block}>
              <div className={s.footer__wrapper__left_icon}>
                <img src="../img/phone-3-icon.svg" alt="" />
              </div>
              <div className={s.footer__wrapper__left_info}>
                <div className={s.footer__wrapper__left_info_city}>Москва</div>
                <a
                  href="tel:+74959809880"
                  className={s.footer__wrapper__left_info_phone}
                >
                  +7 (495) 980-88-80
                </a>
              </div>
            </div>
            <ul className={s.footer__wrapper__left_spisok}>
              <li>
                <a href="/">О компании</a>
              </li>
              <li>
                <a href="/">Доставка и оплата</a>
              </li>
              <li>
                <a href="/">Новости</a>
              </li>
              <li>
                <a href="/">Контакты</a>
              </li>
              <li>
                <a href="/">Каталог продукции</a>
              </li>
              <li
                style={{
                  width: "100%",
                }}
              >
                <a href="/">Прайс-лист</a>
              </li>
            </ul>
          </div>

          <div className={s.footer__wrapper__right}>
            <ul className={s.footer__wrapper__right_spisok}>
              {city.map((el, idx) => (
                <li className={s.footer__wrapper__right_list} key={idx}>
                  <div className={s.footer__wrapper__right_title}>
                    {el.nameCity}
                  </div>
                  <a
                    href="tel:+78123090252"
                    className={s.footer__wrapper__right_phone}
                  >
                    {el.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={s.footer__block}>
          <div className={s.footer__block__left}>
            <div className={s.footer__block__text}>
              Посещая сайт www.brokinvest.ru, вы предоставляете согласие на
              обработку данных о посещении вами сайта www.brokinvest.ru (данные
              cookies и иные пользовательские данные), сбор которых
              автоматически осуществляется ЗАО «ТФД «Брок__Инвест__Сервис и К» –
              далее Компания (ИНН: 7703068485, юридический адрес: 140060,
              Московская обл., г. Люберцы., р.п. Октябрьский, ул. Дорожная,
              д.10.), на условиях Политики обработки персональных данных.
            </div>
          </div>
          <div className={s.footer__block__right}>
            <div className={s.footer__block__text}>
              Компания также может использовать указанные данные для их
              последующей обработки системами LiveInternet, Яндекс.Метрика и
              др., которая осуществляется с целью оптимизации и надежного
              функционирования сайта www.brokinvest.ru.
            </div>
          </div>
        </div>
      </div>

      <div className={s.footer__info}>
        <div className="container">
          <div className={s.footer__info__block}>
            <div className={s.footer__info__block_text}>
              © 1991-2021 ЗАО ТФД "Брок-Инвест-Сервис и К»
            </div>
            <div className={s.footer__info__block_text}>
              <a href="/" className={s.footer__info__block_subtext}>
                Создание сайта –
              </a>
              <span className={s.footer__info__block_img}>
                <img src="../img/Meteor-icon.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
