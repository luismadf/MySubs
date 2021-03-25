import {
  ADD_SUSCRIPTION,
  ADD_SUSCRIPTION_SUCCESS,
  ADD_SUSCRIPTION_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../types";

export function openModalAction(action) {
  return (dispatch) => {
    try {
      dispatch(openModalQuestion(action));
    } catch (error) {}
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
