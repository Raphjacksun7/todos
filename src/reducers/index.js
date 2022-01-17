import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import todoReducer from "./todo";
import authReducer from "./auth";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  auth: authReducer,
  todo: todoReducer,
  firestore: firestoreReducer,
  visibilityFilter,
});
