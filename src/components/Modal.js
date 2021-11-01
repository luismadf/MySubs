import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  closeModalAction,
  addSuscriptionAction,
  deleteSuscriptionAction,
  editSuscriptionSuccessAction,
} from "../actions/suscripcionActions";

const Modal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const action = useSelector((state) => state.suscriptions.action);
  const activeSuscription = useSelector(
    (state) => state.suscriptions.activesuscription
  );

  const closeModal = (suscription) => {
    dispatch(closeModalAction());
    if (action === "editar") {
      dispatch(editSuscriptionSuccessAction(activeSuscription));
      history.push(`/main/`);
    }
    if (action === "añadir") {
      dispatch(addSuscriptionAction(suscription));
      history.push("/main");
    } else if (action === "eliminar") {
      dispatch(deleteSuscriptionAction(activeSuscription));
      history.push("/main");
    }
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
