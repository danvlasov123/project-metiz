import React, { useState } from "react";
import s from "./Result.module.scss";

import URL from "../../components/URL/URL";

function Result() {
  const spisok = [
    {
      title: "Стальная труба",
      text: "изделие из стали кольцеобразного, овального, ....",
    },
    {
      title: "Стальная труба",
      text: "изделие из стали кольцеобразного, овального, многоугольного или иной формы полого поперечного сечения относительно большей длины. ГОСТ 28548-90",
    },
    {
      title: "Стальная труба",
      text: "изделие из стали кольцеобразного, овального, ....",
    },
    {
      title: "Стальная труба",
      text: "изделие из стали кольцеобразного, овального, ....",
    },
    {
      title: "Стальная труба",
      text: "изделие из стали кольцеобразного, овального, многоугольного или иной формы полого поперечного сечения относительно большей длины. ГОСТ 28548-90",
    },
    {
      title: "Стальная труба",
      text: "изделие из стали кольцеобразного, овального, многоугольного или иной формы полого поперечного сечения относительно большей длины. ГОСТ 28548-90",
    },
  ];

  const [searchValue, setSearchValue] = useState("");
  const resetSearchValue = () => {
    setSearchValue("");
  };

  return (
    <section className={s.result}>
      <URL url={["Главная", "Результаты поиска"]} />

      <div className={s.container}>
        <h2 className={s.result__title}>
          <span>Результаты поиска</span>
        </h2>
        <div className={s.result__subtitle}>
          Результаты поиска по запросу: <span>“Труба стальная”</span>
        </div>
        <div className={s.result__search}>
          <div className={s.result__search_block}>
            <input
              type="text"
              placeholder="Труба стальная"
              name="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
            <div className={s.result__search_buttons}>
              <button
                className={s.result__search_clear}
                onClick={resetSearchValue}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8323 10.0051L19.6199 2.21723C20.1267 1.71067 20.1267 0.891618 19.6199 0.385052C19.1133 -0.121515 18.2943 -0.121515 17.7877 0.385052L9.99988 8.17289L2.21228 0.385052C1.70548 -0.121515 0.886669 -0.121515 0.380103 0.385052C-0.126701 0.891618 -0.126701 1.71067 0.380103 2.21723L8.1677 10.0051L0.380103 17.7929C-0.126701 18.2995 -0.126701 19.1185 0.380103 19.6251C0.632556 19.8778 0.964493 20.0047 1.29619 20.0047C1.62789 20.0047 1.95959 19.8778 2.21228 19.6251L9.99988 11.8373L17.7877 19.6251C18.0404 19.8778 18.3721 20.0047 18.7038 20.0047C19.0355 20.0047 19.3672 19.8778 19.6199 19.6251C20.1267 19.1185 20.1267 18.2995 19.6199 17.7929L11.8323 10.0051Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </button>

              <button className={s.result__search_find}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6419 24.706L22.642 24.7061C22.9198 24.9847 23.2934 25.1378 23.6916 25.1378C24.0686 25.1378 24.4278 24.9989 24.701 24.745C25.2831 24.2042 25.302 23.3051 24.7414 22.7421L24.6351 22.848L24.7414 22.7421L18.9229 16.8997C20.4096 15.1445 21.2234 12.9555 21.2234 10.6778C21.2234 5.24704 16.6487 0.837793 11.0367 0.837793C5.42472 0.837793 0.85 5.24704 0.85 10.6778C0.85 16.1085 5.42472 20.5178 11.0367 20.5178C13.1018 20.5178 15.0728 19.9283 16.7677 18.8077L22.6419 24.706ZM11.0367 3.66562C15.0495 3.66562 18.3051 6.81625 18.3051 10.6778C18.3051 14.5393 15.0495 17.69 11.0367 17.69C7.02391 17.69 3.76827 14.5393 3.76827 10.6778C3.76827 6.81625 7.02391 3.66562 11.0367 3.66562Z"
                    fill="#FF6A39"
                    stroke="#FF6A39"
                    stroke-width="0.3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={s.result__spisok}>
          {spisok.map((item, idx) => (
            <a href="/" className={s.result__spisok_item} key={idx}>
              <span>{item.title}</span>
              <span className={s.defis}>–</span>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Result;
