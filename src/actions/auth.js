import * as types from "../constants/ActionTypes";
import * as AuthService from "../services/auth.service";

export const register = (email, password) => (dispatch) => {
  return AuthService.signup(email, password).then(
    (response) => {
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: response,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: types.REGISTER_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.signin(email, password).then(
    (response) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response,
      });
      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: types.LOGIN_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.signout();
  dispatch({
    type: types.LOGOUT,
  });
};
