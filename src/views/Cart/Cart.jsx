import React from "react";
import s from "./Cart.module.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import URL from "../../components/URL/URL";
import InputNumber from "../../components/InputNumber";

const openModalDelete = () => {
  document.body.classList.add("modal-open-delete");
};

const openModalArrange = (e) => {
  e.preventDefault();

  document.body.classList.add("modal-open-arrange");
};

function Cart() {
  const priceList = [
    {
      name: "Труба ВГП 15x2.8 ГОСТ 3262, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ВГП 15x2.8 ГОСТ 3262, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ВГП 15x2.8 ГОСТ 3262, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ВГП 15x2.8 ГОСТ 3262, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ВГП 20x2.8 ГОСТ 3262 / 6м, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ВГП 25x3.2 ГОСТ 3262, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ВГП 25x3.2 ГОСТ 3262 / АТЗ / 6м / ст10, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ВГП 32x3.2 ГОСТ 3262, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ЭсвПШ 108x4 ГОСТ 10704; 10705 / ВМЗ / ст20 / 12м, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ВГП 32x3.2 ГОСТ 3262, тн",
      price: "150 000",
      quantity: "0",
    },
    {
      name: "Труба ЭсвПШ 108x4 ГОСТ 10704; 10705 / ВМЗ / ст20 / 12м, тн",
      price: "150 000",
      quantity: "0",
    },
  ];

  return (
    <section className={s.cart}>
      <URL url={["Главная", "Корзина"]} />

      <div className={s.container}>
        <div className={s.cart__wrapper}>
          <div className={s.cart__wrapper_left}>
            <h2 className={s.cart__wrapper_title}>
              <span>Корзина</span>
            </h2>
            <div className={s.cart__wrapper_text}>
              Все подробности о текущих ценах у вашего персонального менеджера
            </div>

            <div className={s.price_list__wrapper}>
              <div className={s.price_list__wrapper_head}>
                <div className={s.price_list__wrapper_row}>
                  <div
                    className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_title}`}
                  >
                    Наименование <span>продукции</span>
                  </div>
                  <div
                    className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_title}`}
                  >
                    Цена
                  </div>
                  <div
                    className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_title}`}
                  >
                    <span>Количество</span>
                    <span>Кол-во</span>
                  </div>
                  <div
                    className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_title}`}
                  >
                    <span>В корзину</span>
                  </div>
                </div>
              </div>

              <SimpleBar
                className={s.price_list__wrapper_blk}
                style={{ maxHeight: 667 }}
                scrollbarMaxSize={18}
              >
                <div className={s.price_list__wrapper_content}>
                  {priceList.map((item, idx) => (
                    <div className={s.price_list__wrapper_row} key={idx}>
                      <div
                        className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_name}`}
                      >
                        {item.name}
                      </div>

                      <div
                        className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_price}`}
                      >
                        {item.price}
                      </div>

                      <div
                        className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_quntity}`}
                      >
                        <InputNumber />
                      </div>

                      <div
                        className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_quntity}`}
                      >
                        <button
                          className={`${s.price_list__wrapper_row_btn}`}
                          onClick={openModalDelete}
                        >
                          <span>
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                x1="3.91996"
                                y1="4.20431"
                                x2="11.199"
                                y2="11.4833"
                                stroke="white"
                              />
                              <line
                                x1="4.25192"
                                y1="11.4824"
                                x2="11.531"
                                y2="4.20334"
                                stroke="white"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </SimpleBar>
            </div>

            <div className={s.price_list__wrapper_arrange}>
              <div className={s.price_list__wrapper_arrange_block}>
                <div className={s.price_list__wrapper_arrange_left}>
                  <svg
                    width="32"
                    height="24"
                    viewBox="0 0 32 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0V24L12 12V0H0Z" fill="white" />
                    <path d="M20 0V24L32 12V0H20Z" fill="white" />
                  </svg>
                </div>

                <div className={s.price_list__wrapper_arrange_right}>
                  <div className={s.price_list__wrapper_arrange_title}>
                    Оформите ваш заказ,
                  </div>
                  <div className={s.price_list__wrapper_arrange_subtitle}>
                    менеджер свяжется с вами для уточнения деталей.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.cart__wrapper_right}>
            <h2 className={s.cart__wrapper_title}>
              <span>Оформление заказа</span>
            </h2>

            <form className={s.cart__wrapper_form}>
              <div className={s.cart__wrapper_main}>
                <div className={s.cart__wrapper_form_block}>
                  <div className={s.cart__wrapper_form_wp}>
                    <label>ФИО</label>
                    <input type="text" placeholder="Введите ваше имя" />
                  </div>
                </div>

                <div className={s.cart__wrapper_form_block}>
                  <div className={s.cart__wrapper_form_wp}>
                    <label>Организация</label>
                    <input type="text" placeholder="" />
                  </div>
                </div>

                <div
                  className={`${s.cart__wrapper_form_block} ${s.cart__wrapper_form_double}`}
                >
                  <div className={s.cart__wrapper_form_wp}>
                    <label>E-mail</label>
                    <input type="email" placeholder="name@e-mail.ru" />
                  </div>

                  <div className={s.cart__wrapper_form_wp}>
                    <label>Номер телефона</label>
                    <input type="tel" placeholder="+7 (912) 345-67-89" />
                  </div>
                </div>

                <div className={s.cart__wrapper_form_block}>
                  <div className={s.cart__wrapper_form_wp}>
                    <label>Адрес</label>
                    <textarea placeholder="Введите адрес"></textarea>
                  </div>
                </div>

                <div className={s.cart__wrapper_form_text}>
                  * - Поля, обязательные для заполнения
                </div>

                <div className={s.cart__wrapper_form_checkbox}>
                  <input id="checkbox" type="checkbox" name="checkbox" />
                  <label htmlFor="checkbox">
                    Подтверждаю согласие на обработку моих персональных данных
                    <a href="/">(Политика обработки и хранения данных )</a>
                  </label>
                </div>

                <button
                  className={`btn ${s.cart__wrapper_form_submit}`}
                  onClick={openModalArrange}
                >
                  Оформить заказ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
