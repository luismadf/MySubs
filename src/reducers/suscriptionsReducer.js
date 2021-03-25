import { OPEN_MODAL, CLOSE_MODAL, ADD_SUSCRIPTION } from "../types";

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
        newsuscription: action.payload.suscription,
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
    default:
      return state;
  }
}
