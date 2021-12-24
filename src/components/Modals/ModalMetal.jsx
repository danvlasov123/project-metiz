function ModalMetal() {
  const closeModal = () => {
    document.body.classList.remove("modal-open-metal");
  };

  const isOpenMetal2 = (e) => {
    e.preventDefault();

    document.body.classList.remove("modal-open-metal");
    document.body.classList.add("modal-open-metal2");
  };

  return (
    <div className="modal-wrapper modal-metal">
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
      <div className="modal-wrapper__title">Заявка на металлопрокат</div>
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
              E-mail
            </label>
            <div className="modal-wrapper__form-block_input">
              <input type="email" placeholder="name@e-mail.ru" name="email" />
            </div>
          </div>

          <div className="modal-wrapper__form-block_item">
            <label htmlFor="" className="modal-wrapper__form-block_label">
              Организация
            </label>
            <div className="modal-wrapper__form-block_input">
              <input type="text" placeholder="" name="organizate" />
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
              <div className="modal-wrapper__form-block_file">
                <div className="modal-wrapper__form-block_file-btn">
                  <input
                    type="file"
                    className="modal-wrapper__form-block_file-input"
                    id="file"
                  />
                  <label htmlFor="file">Прикрепить файл</label>
                </div>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3049 2.09515C16.1129 -0.0496217 12.6086 -0.0491552 10.4172 2.09621L1.22603 11.2874C-0.435909 12.9885 -0.404148 15.7148 1.29698 17.3767C2.97011 19.0114 5.64223 19.0114 7.31537 17.3767L15.6381 9.054C16.7201 7.97203 16.7201 6.21777 15.6381 5.13581C14.5561 4.05384 12.8019 4.05384 11.7199 5.13581L3.75902 13.0966C3.48135 13.3842 3.48932 13.8423 3.77683 14.12C4.0573 14.3909 4.50191 14.3909 4.78238 14.12L12.7432 6.15913C13.2711 5.6534 14.1091 5.67142 14.6147 6.19933C15.1051 6.71128 15.1051 7.51872 14.6147 8.03068L6.29205 16.3534C5.16772 17.4617 3.35774 17.4487 2.2494 16.3244C1.15225 15.2114 1.15225 13.4237 2.2494 12.3107L11.4405 3.11953C13.0777 1.48175 15.7325 1.48129 17.3703 3.11842C19.0081 4.75556 19.0085 7.41042 17.3714 9.04819L8.18022 18.2394C7.87664 18.4994 7.84128 18.9562 8.10126 19.2598C8.36125 19.5634 8.81812 19.5988 9.1217 19.3388C9.15003 19.3145 9.1764 19.2881 9.20066 19.2598L18.3918 10.0686C20.5696 7.84282 20.5308 4.27295 18.3049 2.09515Z"
                      fill="#FF6A39"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="modal-wrapper__form-block_text">
            <span>*</span> — Поля, обязательные для заполнения
          </div>

          <div className="modal-wrapper__form-block_checkbox">
            <input type="checkbox" id="politik1" name="politik" />
            <label htmlFor="politik1">
              Подтверждаю согласие на обработку моих персональных данных (
              <a href="/">Политика обработки и хранения данных</a>)
            </label>
          </div>

          <div className="modal-wrapper__form-block_submit">
            <button className="btn" type="submit" onClick={isOpenMetal2}>
              Далее
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalMetal;
