import { combineReducers } from "redux";
import suscriptionsReducer from "./suscriptionsReducer";

export default combineReducers({ suscriptions: suscriptionsReducer });
