import { OPEN_MODAL, CLOSE_MODAL } from "../types";

const initialState = {
  suscriptions: [{ name: "a" }, { name: "a" }, { name: "a" }],
  activesuscription: null,
  modal: false,
  action: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: true,
        action: action.payload.action,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
}
