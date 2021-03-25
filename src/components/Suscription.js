import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModalAction } from "../actions/suscripcionActions";

const Suscription = () => {
  const dispatch = useDispatch();

  const openModal = (action) => {
    dispatch(openModalAction(action));
  };

  return (
    <div className="suscription_container">
      <input type="checkbox" name="" id="" />
      <div className="suscription_info">
        <div className="info_left">
          <p>Netflix</p>
          <div className="info_left_buttons">
            <button
              className="button small_button purple_button"
              onClick={() => openModal({ action: "editar" })}
            >
              Editar
            </button>
            <button
              className="button small_button red_button"
              onClick={() => openModal({ action: "eliminar" })}
            >
              Eliminar
            </button>
          </div>
        </div>
        <div className="info_right">
          <p className="info_right-price">9.99$</p>
          <p className="info_right-type">month</p>
        </div>
      </div>
    </div>
  );
};

export default Suscription;
