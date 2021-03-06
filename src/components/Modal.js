import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeModalAction } from "../actions/suscripcionActions";

const Modal = () => {
  const dispatch = useDispatch();

  const action = useSelector((state) => state.suscriptions.action);

  console.log(action);

  const closeModal = () => {
    dispatch(closeModalAction());
  };

  return (
    <div className="edit_modal">
      <div className="modal_text">
        <p>
          ¿Estás seguro de querer <span>{action}</span> esta suscripción?
        </p>
      </div>
      <div className="modal_buttons">
        <button
          className="button medium_button button_edit"
          onClick={() => closeModal({})}
        >
          Cancelar
        </button>
        <button
          className="button medium_button button_edit_active"
          onClick={() => closeModal({})}
        >
          {action}
        </button>
      </div>
    </div>
  );
};

export default Modal;
