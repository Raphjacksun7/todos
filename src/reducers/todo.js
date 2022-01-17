import * as ActionTypes from "../constants/ActionTypes";

const initialState = {
  todos: [],
  todo: {},
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.FECTH_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
      };

    case ActionTypes.ADD_TODO_SUCCESS:
      return { ...state, todos: [payload, ...state.todos] };

    case ActionTypes.ADD_TODO_FAIL:
      return {
        ...state,
      };

    case ActionTypes.EDIT_TODO_SUCCESS:
      return {
        ...state,
        todo: payload,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
        ),
      };

    case ActionTypes.EDIT_TODO_FAIL:
      return {
        ...state,
      };

    case ActionTypes.COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case ActionTypes.COMPLETE_TODO_FAIL:
      return {
        ...state,
      };

    case ActionTypes.COMPLETE_ALL_SUCCESS:
      const areAllCompleted = state.todos.every((todo) => todo.completed);
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          completed: !areAllCompleted,
        })),
      };

    case ActionTypes.COMPLETE_ALL_FAIL:
      return {
        ...state,
      };

    case ActionTypes.CLEAR_COMPLETED_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed === false),
      };

    case ActionTypes.CLEAR_COMPLETED_FAIL:
      return {
        ...state,
      };

    case ActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    case ActionTypes.DELETE_TODO_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default todoReducer;
