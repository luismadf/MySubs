/* eslint-disable import/no-anonymous-default-export */
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_SUSCRIPTION,
  ADD_SUSCRIPTION_EDIT,
  SUSCRIPTION_EDIT_SUCCESS,
  CHANGE_ACTION,
  DELETE_SUSCRIPTION,
} from "../types";

const initialState = {
  suscriptions: [
    { name: "Netflix", id: 1 },
    { name: "Youtube", id: 2 },
    { name: "Amazon Prime", id: 3 },
  ],
  activesuscription: null,
  modal: false,
  action: null,
  newsuscription: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: true,
        action: action.payload.action,
        newsuscription: state.newsuscription
          ? state.newsuscription
          : action.payload.suscription,
        activesuscription: state.activesuscription
          ? state.activesuscription
          : action.payload.suscription,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };
    case ADD_SUSCRIPTION:
      return {
        ...state,
        suscriptions: [...state.suscriptions, state.newsuscription],
        newsuscription: null,
      };
    case ADD_SUSCRIPTION_EDIT:
      return {
        ...state,
        activesuscription: action.payload,
      };
    case SUSCRIPTION_EDIT_SUCCESS:
      return {
        ...state,
        newsuscription: null,
        activesuscription: null,
        suscriptions: state.suscriptions.map((suscription) =>
          suscription.id === action.payload.id
            ? (suscription = action.payload)
            : suscription
        ),
      };
    case CHANGE_ACTION:
      return {
        ...state,
        action: action.payload,
      };
    case DELETE_SUSCRIPTION:
      return {
        ...state,
        action: null,
        activesuscription: null,
        newsuscription: null,
        suscriptions: state.suscriptions.filter(
          (suscription) => suscription.id !== state.activesuscription.id
        ),
      };
    default:
      return state;
  }
}
