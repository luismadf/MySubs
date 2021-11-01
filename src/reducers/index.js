import { combineReducers } from "redux";
import suscriptionsReducer from "./suscriptionsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  suscriptions: suscriptionsReducer,
  users: userReducer,
});
