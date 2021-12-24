function ModalsApllication() {
  const closeModal = () => {
    document.body.classList.remove("modal-open-application");
  };

  const isOpenApp2 = (e) => {
    e.preventDefault();
  
    document.body.classList.remove("modal-open-application");
    document.body.classList.add("modal-open-application2");
  };

  return (
    <div className="modal-wrapper modal-appllication">
      <button className="modal-wrapper__close" onClick={closeModal}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8323 10.0173L19.6199 2.22944C20.1267 1.72287 20.1267 0.903826 19.6199 0.397259C19.1133 -0.109308 18.2943 -0.109308 17.7877 0.397259L9.99988 8.1851L2.21228 0.397259C1.70548 -0.109308 0.886669 -0.109308 0.380103 0.397259C-0.126701 0.903826 -0.126701 1.72287 0.380103 2.22944L8.1677 10.0173L0.380103 17.8051C-0.126701 18.3117 -0.126701 19.1307 0.380103 19.6373C0.632556 19.89 0.964493 20.0169 1.29619 20.0169C1.62789 20.0169 1.95959 19.89 2.21228 19.6373L9.99988 11.8495L17.7877 19.6373C18.0404 19.89 18.3721 20.0169 18.7038 20.0169C19.0355 20.0169 19.3672 19.89 19.6199 19.6373C20.1267 19.1307 20.1267 18.3117 19.6199 17.8051L11.8323 10.0173Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="modal-wrapper__title">Заявка на обратный звонок</div>
      <form action="#" className="modal-wrapper__form">
        <div className="modal-wrapper__form-block">
          <div className="modal-wrapper__form-block_item">
            <label htmlFor="" className="modal-wrapper__form-block_label">
              Как к вам обращаться<span>*</span>
            </label>
            <div className="modal-wrapper__form-block_input">
              <input type="text" placeholder="Введите ваше имя" name="name" />
            </div>
          </div>

          <div className="modal-wrapper__form-block_item">
            <label htmlFor="" className="modal-wrapper__form-block_label">
              Номер телефона<span>*</span>
            </label>
            <div className="modal-wrapper__form-block_input">
              <input type="tel" placeholder="+7 (912) 345-67-89" name="name" />
            </div>
          </div>

          <div className="modal-wrapper__form-block_item">
            <label htmlFor="" className="modal-wrapper__form-block_label">
              Сообщение
            </label>
            <div className="modal-wrapper__form-block_textarea">
              <textarea
                name="message"
                placeholder="Введите текст сообщения"
              ></textarea>
            </div>
          </div>

          <div className="modal-wrapper__form-block_text">
            <span>*</span> — Поля, обязательные для заполнения
          </div>

          <div className="modal-wrapper__form-block_checkbox">
            <input type="checkbox" id="checkbox8" name="checkbox8" />
            <label htmlFor="checkbox8">
              Подтверждаю согласие на обработку моих персональных данных (
              <a href="/">Политика обработки и хранения данных</a>)
            </label>
          </div>

          <div className="modal-wrapper__form-block_submit">
            <button className="btn" type="submit" onClick={isOpenApp2}>
              Далее
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalsApllication;
