import { act } from "react-dom/test-utils";
import Suscription from "../components/Suscription";
import {
  ADD_SUSCRIPTION,
  ADD_SUSCRIPTION_SUCCESS,
  ADD_SUSCRIPTION_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../types";

export function openModalAction(action) {
  return (dispatch) => {
    if (action.action === "añadir") {
      dispatch(openModalQuestion(action));
    }
  };
}

const openModalQuestion = (action) => ({
  type: OPEN_MODAL,
  payload: action,
});

export function closeModalAction() {
  return (dispatch) => {
    try {
      dispatch(closeModal());
    } catch (error) {}
  };
}

const closeModal = () => ({
  type: CLOSE_MODAL,
});

export function addSuscriptionAction(suscription) {
  return (dispatch) => {
    try {
      dispatch(addSuscription(suscription));
    } catch (error) {}
  };
}

const addSuscription = (suscription) => ({
  type: ADD_SUSCRIPTION,
  payload: suscription,
});
