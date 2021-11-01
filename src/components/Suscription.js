import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  openModalAction,
  editSuscriptionAction,
} from "../actions/suscripcionActions";
import { useHistory } from "react-router-dom";

const Suscription = ({ suscription }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  /*  const { name } = suscription; */

  const openModal = (action) => {
    if (action.action === "editar") {
      dispatch(editSuscriptionAction(suscription));
      history.push(`/edit/${suscription.id}`);
      return;
    }
    dispatch(openModalAction(action));
  };

  return (
    <div className="suscription_container">
      <input type="checkbox" name="" id="" />
      <div className="suscription_info">
        <div className="info_left">
          <p>{suscription.name}</p>
          <div className="info_left_buttons">
            <button
              className="button small_button purple_button"
              onClick={() => openModal({ action: "editar", suscription })}
            >
              Editar
            </button>
            <button
              className="button small_button red_button"
              onClick={() => openModal({ action: "eliminar", suscription })}
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
