import * as types from "../constants/ActionTypes";
import * as TodoService from "../services/todo.service";

export const getTodos = () => (dispatch) => {
  return TodoService.getTodos().then(
    (response) => {
      dispatch({
        type: types.FECTH_TODOS_SUCCESS,
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
        type: types.FECTH_TODOS_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const addTodo = (text) => (dispatch) => {
  return TodoService.addTodo(text).then(
    (response) => {
      dispatch({
        type: types.ADD_TODO_SUCCESS,
        payload: { id: response.id, text, completed: false },
      });

      dispatch({
        type: types.SET_MESSAGE,
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
        type: types.ADD_TODO_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const editTodo = (id, text) => (dispatch) => {
  return TodoService.editTodo(id, text).then(
    (response) => {
      dispatch({
        type: types.EDIT_TODO_SUCCESS,
        payload: { id, text },
      });

      dispatch({
        type: types.SET_MESSAGE,
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
        type: types.EDIT_TODO_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const completeTodo = (id) => (dispatch) => {
  return TodoService.completeTodo(id).then(
    (response) => {
      dispatch({
        type: types.COMPLETE_TODO_SUCCESS,
        payload: { id },
      });

      dispatch({
        type: types.SET_MESSAGE,
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
        type: types.COMPLETE_TODO_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const completeAll = () => (dispatch) => {
  return TodoService.completeAll().then(
    (response) => {
      dispatch({
        type: types.COMPLETE_ALL_SUCCESS,
        payload: response,
      });

      dispatch({
        type: types.SET_MESSAGE,
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
        type: types.COMPLETE_ALL_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const clearCompleted = () => (dispatch) => {
  return TodoService.clearCompleted().then(
    (response) => {
      dispatch({
        type: types.CLEAR_COMPLETED_SUCCESS,
        payload: response,
      });

      dispatch({
        type: types.SET_MESSAGE,
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
        type: types.CLEAR_COMPLETED_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteTodo = (id) => (dispatch) => {
  return TodoService.deleteTodo(id).then(
    (response) => {
      dispatch({
        type: types.DELETE_TODO_SUCCESS,
        payload: id,
      });

      dispatch({
        type: types.SET_MESSAGE,
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
        type: types.DELETE_TODO_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
