import React from "react";
import s from "./404.module.scss";

function NotFound() {
  return (
    <section className={s.not_found}>
      <div className={s.container}>
        <div className={s.not_found__wrapper}>
          <div className={s.not_found__wrapper_title}>404</div>
          <div className={s.not_found__wrapper_subtitle}>
            Страница не найдена
          </div>
          <div className={s.not_found__wrapper_buttons}>
            <button className="btn">
              Перейти <br /> на главную
            </button>
            <button className="btn">
              Перейти <br /> в каталог
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
