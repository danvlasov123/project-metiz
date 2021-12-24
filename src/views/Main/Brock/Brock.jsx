import React from "react";
import s from "./Brock.module.scss";

function Brock() {
  return (
    <section className={s.brock}>
      <div className={s.container}>
        <h2 className={s.brock__title}>
          <span>БРОК в цифрах</span>
        </h2>
        <div className={s.brock__wrapper}>
          <div className={s.brock__wrapper__item}>
            <div className={s.brock__wrapper__item_number}>
              30 <span>+</span>
            </div>
            <div className={s.brock__wrapper__item_text}>
              лет на рынке металлоторговли
            </div>
          </div>
          <div className={s.brock__wrapper__item}>
            <div className={s.brock__wrapper__item_number}>15</div>
            <div className={s.brock__wrapper__item_text}>
              офисов в регионах России
            </div>
          </div>
          <div className={s.brock__wrapper__item}>
            <div className={s.brock__wrapper__item_number}>
              1500 <span>+</span>
            </div>
            <div className={s.brock__wrapper__item_text}>
              востребованных <br /> и готовых к отгрузке <br /> позиций
            </div>
          </div>
          <div className={s.brock__wrapper__item}>
            <div className={s.brock__wrapper__item_number}>
              30 <span>+</span>
            </div>
            <div className={s.brock__wrapper__item_text}>
              постоянных поставщиков
            </div>
          </div>
          <div className={s.brock__wrapper__item}>
            <div className={s.brock__wrapper__item_number}>
              27 <span>+</span>
            </div>
            <div className={s.brock__wrapper__item_text}>
              собственных машин в автопарке
            </div>
          </div>
          <div className={s.brock__wrapper__item}>
            <div className={s.brock__wrapper__item_number}>9</div>
            <div className={s.brock__wrapper__item_text}>
              складских комплексов
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brock;
