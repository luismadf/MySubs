import {
  ADD_SUSCRIPTION,
  SUSCRIPTION_EDIT_SUCCESS,
  ADD_SUSCRIPTION_EDIT,
  OPEN_MODAL,
  CLOSE_MODAL,
  CHANGE_ACTION,
  DELETE_SUSCRIPTION,
} from "../types";

export function openModalAction(action) {
  return (dispatch) => {
    if (action.action === "añadir") {
      dispatch(openModalQuestion(action));
      return;
    }
    if (action.action === "editar") {
      dispatch(openModalQuestion(action));
      return;
    }
    if (action.action === "confirmar") {
      dispatch(openModalQuestion({ action: "confirmar" }));
      return;
    }
    if (action.action === "eliminar") {
      dispatch(openModalQuestion(action));
      return;
    }
    dispatch(openModalQuestion(action));
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

export function changeAction(action) {
  return (dispatch) => {
    try {
      console.log("Funciona change");
      dispatch(changeTypeAction(action));
    } catch (error) {}
  };
}

const changeTypeAction = (action) => ({
  type: CHANGE_ACTION,
  payload: action,
});

export function deleteSuscriptionAction(action) {
  return (dispatch) => {
    try {
      dispatch(deleteSuscription(action));
    } catch (error) {}
  };
}

const deleteSuscription = (action) => ({
  type: DELETE_SUSCRIPTION,
  payload: action,
});

export function editSuscriptionAction(action) {
  return (dispatch) => {
    try {
      dispatch(editSuscription(action));
    } catch (error) {}
  };
}

const editSuscription = (action) => ({
  type: ADD_SUSCRIPTION_EDIT,
  payload: action,
});

export function editSuscriptionSuccessAction(action) {
  return (dispatch) => {
    try {
      console.log(action);
      dispatch(editSuscriptionSuccess(action));
    } catch (error) {}
  };
}

const editSuscriptionSuccess = (action) => ({
  type: SUSCRIPTION_EDIT_SUCCESS,
  payload: action,
});
