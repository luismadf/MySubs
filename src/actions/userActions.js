import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types";
import clienteAxios from "../config/axios";

export function userAuthAction(action) {
  return async (dispatch) => {
    try {
      const respuesta = await clienteAxios.post("/user/login", action);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function registerUserAction(action) {
  return async (dispatch) => {
    try {
      const respuesta = await clienteAxios.post("/user", action);
      console.log(respuesta);
      /*   dispatch({
        type: REGISTER_SUCCESS,
        payload: respuesta.data,
      }); */
    } catch (error) {
      console.log(error.response);
    }
  };
}
