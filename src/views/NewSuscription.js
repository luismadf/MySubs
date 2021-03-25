import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../components/Modal";

import { openModalAction } from "../actions/suscripcionActions";

const NewSuscription = () => {
  const activeModal = useSelector((state) => state.suscriptions.modal);
  const dispatch = useDispatch();

  const [suscription, setSuscription] = useState({
    name: "",
    isPaid: false,
    period: "montly",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(openModalAction({ action: "añadir", suscription }));
    // Falta validar
  };

  const newSuscription = (e) => {
    setSuscription({
      ...suscription,
      [e.target.name]: e.target.value,
    });
  };

  const isPaid = (answer) => {
    setSuscription({
      ...suscription,
      isPaid: answer,
    });
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
          <input
            type="text"
            name="name"
            value={suscription.name}
            onChange={(e) => newSuscription(e)}
          />
        </div>
        <div className="form_field">
          <label htmlFor="">Pago</label>
          <input
            type="text"
            name="payment"
            id=""
            value={suscription.payment}
            onChange={(e) => newSuscription(e)}
          />
        </div>
        <div className="form_field">
          <label htmlFor="">Periodo de pago</label>
          <select
            name="period"
            value={suscription.period}
            onChange={(e) => newSuscription(e)}
          >
            <option value="montly">Mensual</option>
            <option value="yearly">Anual</option>
          </select>
        </div>
        <div className="form_conditions">
          <input
            type="checkbox"
            name="isPaid"
            value={suscription.isPaid}
            onChange={(e) => (e.target.checked ? isPaid(true) : isPaid(false))}
          />
          <label htmlFor="">
            ¿Se ha pagado este{" "}
            {suscription.period === "montly"
              ? "mes"
              : suscription.period === "yearly"
              ? "año"
              : null}
            ?
          </label>
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
