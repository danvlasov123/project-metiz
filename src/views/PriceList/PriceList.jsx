import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePaginationList } from "../../hooks/usePaginationList";
import {
  fetchTodos,
  fetchStocks,
  fetchCategories,
} from "../../store/todoSlice";
import { addToCart } from "../../store/cartSlice";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import s from "./PriceList.module.scss";

import URL from "../../components/URL/URL";
import CustomSelect from "../../components/CustomSelect";
import InputNumber from "../../components/InputNumber";
import Loading from "../../components/common/loading";
import Button from "../../components/common/button";

function PriceList() {
  const [count, setCount] = useState(20);
  const [lenghtList, setLengthList] = useState(20);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.todos.categories);
  const groups = useSelector((state) => state.todos.groups);
  const stocks = useSelector((state) => state.todos.stocks);
  const priceList = useSelector((state) => state.todos.todos);
  const { status, error } = useSelector((state) => state.todos);
  useEffect(() => {
    if (status === "resolved") {
      setLengthList(priceList.length);
      setCount(20);
    }
  }, [status]);
  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
    if (!stocks.length) {
      dispatch(fetchStocks());
    }
    dispatch(fetchTodos());
  }, []);

  const options = (arr) => {
    return arr.map((el) => {
      const result = {
        label: el.title,
        id: el.id,
      };
      return result;
    });
  };

  const selectOptions = [
    {
      title: "Категория:",
      options: options(categories),
    },
    {
      title: "Группа:",
      options: options(groups),
    },
    {
      title: "Складской комплекс:",
      options: options(stocks),
    },
  ];

  const openModalCart = () => {
    document.body.classList.add("modal-open-cart");
  };

  return (
    <section className={s.price_list}>
      <URL url={["Главная", "Прайс-лист"]} />
      <div className={s.container}>
        <div className={s.price_list__top}>
          <div className={s.price_list__top_left}>
            <h2 className={s.price_list__top_title}>
              <span>Прайс-лист</span>
            </h2>
            <div className={s.price_list__top_text}>
              Все подробности о текущих ценах у вашего персонального менеджера
            </div>
          </div>

          <div className={s.price_list__top_right}>
            <span>Выбирайте ближайший к вам cкладской комплекс!</span>
          </div>
          <div className={s.price_list__top_line}>
            <img src="../img/line-bg-2.svg" alt="" />
          </div>
        </div>

        <div className={s.price_list__table}>
          <div className={s.price_list__table_block}>
            {selectOptions.map((option, idx) => (
              <CustomSelect
                options={option}
                fetch={fetchTodos}
                dispatch={dispatch}
                key={idx}
                useSelector={useSelector}
              />
            ))}
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
                  <span>Количество</span> <span>Кол-во</span>
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
              style={{ maxHeight: 600 }}
              scrollbarMaxSize={18}
            >
              <div className={s.price_list__wrapper_content}>
                {usePaginationList(count, priceList).map((item, idx) => (
                  <div className={s.price_list__wrapper_row} key={idx}>
                    <div
                      className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_name}`}
                    >
                      <span>{item.nomenclature}</span>
                    </div>

                    <div
                      className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_price}`}
                    >
                      <span>{item.price}</span>
                    </div>

                    <div
                      className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_quntity}`}
                    >
                      <InputNumber />
                    </div>

                    <button
                      className={`${s.price_list__wrapper_column} ${s.price_list__wrapper_row_btn}`}
                      onClick={() => {
                        openModalCart();
                        dispatch(addToCart(item));
                      }}
                    >
                      <span>
                        <svg
                          width="8"
                          height="9"
                          viewBox="0 0 8 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="0.293945"
                            y1="4.52905"
                            x2="7.70571"
                            y2="4.52905"
                            stroke="white"
                          />
                          <line
                            x1="4.0293"
                            y1="8.20557"
                            x2="4.0293"
                            y2="0.793802"
                            stroke="white"
                          />
                        </svg>
                      </span>
                      <div className={s.price_list__wrapper_btn_text}>
                        В корзину
                      </div>
                    </button>
                  </div>
                ))}
                {status === "resolved" && !priceList.length && (
                  <h2
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Не найдено
                  </h2>
                )}
                {lenghtList > count
                  ? status === "resolved" &&
                    priceList.length && (
                      <Button name="Еще" click={() => setCount(count + 20)} />
                    )
                  : null}
                {status === "loading" && <Loading />}
                {error && <h2>An error occured: {error}</h2>}
              </div>
            </SimpleBar>
          </div>

          <div className={s.price_list__after}>
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
            Цены действительны на условиях предоплаты. Действуют
            спецпредложения. Заказы направляйте вашему персональному менеджеру.
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
