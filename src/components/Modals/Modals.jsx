import React from "react";

import ModalsApllication from "./ModalApplication";
import ModalsApllication2 from "./ModalApplication2";
import ModalMetal from "./ModalMetal";
import ModalMetal2 from "./ModalMetal2";
import ModalCart from "./ModalCart";
import ModalDelete from "./ModalsDeleteProduct";
import ModalArrange from './ModalArrange'

import "./Modals.scss";

function removeClassList(select) {
  document.body.classList.remove(select);
}

function closeAllModals(e) {
  if (e.target.classList.contains("modals")) {
    removeClassList("modal-open-application");
    removeClassList("modal-open-application2");
    removeClassList("modal-open-metal");
    removeClassList("modal-open-metal2");
    removeClassList("modal-open-delete");
  }
}

function Modals() {
  return (
    <div className="modals" onClick={closeAllModals}>
      <ModalsApllication />
      <ModalsApllication2 />
      <ModalMetal />
      <ModalMetal2 />
      <ModalCart />
      <ModalDelete />
      <ModalArrange />
    </div>
  );
}

export default Modals;
