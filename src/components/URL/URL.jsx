import React from "react";
import s from "./URL.module.scss";

function URL(props) {
  return (
    <div className={s.url}>
      <div className={s.container}>
        <div className={s.url__wrapper}>
          {props.url.map((link, idx) => (
            <a href="/" className={s.url__item} key={idx}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default URL;
