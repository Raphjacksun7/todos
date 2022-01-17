import * as types from "../constants/ActionTypes";
import * as AuthService from "../services/auth.service";

export const register =
  (...createUserdata) =>
  (dispatch) => {
    return AuthService.signup(...createUserdata).then(
      (response) => {
        dispatch({
          type: types.REGISTER_SUCCESS,
        });

        dispatch({
          type: types.SET_MESSAGE,
          payload: response.data.message,
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

export const login =
  (...loginCredential) =>
  (dispatch) => {
    return AuthService.signin(...loginCredential).then(
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



