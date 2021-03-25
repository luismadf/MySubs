import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../components/Modal";

import { openModalAction } from "../actions/suscripcionActions";

const NewSuscription = () => {
  const activeModal = useSelector((state) => state.suscriptions.modal);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(openModalAction({ action: "añadir" }));
  };

  return (
    <main>
      <div className={activeModal ? "modal_background" : null}></div>
      <div className="login_title">
        <h3>Nueva Suscripción</h3>
        <p>Rellena el siguiente formulario para añadir una suscripción</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form_field">
          <label htmlFor="">Nombre de Suscripción</label>
          <input type="text" name="" id="" />
        </div>
        <div className="form_field">
          <label htmlFor="">Pago</label>
          <input type="email" name="" id="" />
        </div>
        <div className="form_field">
          <label htmlFor="">Periodo de pago</label>
          <input type="password" name="" id="" />
        </div>
        <div className="form_conditions">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">¿Se ha pagado este [periodo de pago]?</label>
        </div>
        <button type="submit" className="button secondary_button button_active">
          AÑADIR
        </button>
      </form>
      {activeModal ? <Modal /> : null}
    </main>
  );
};

export default NewSuscription;
