/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types";

const initialState = {
  auth: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.authToken);
      return {
        ...state,
        auth: true,
      };

    default:
      return state;
  }
}
