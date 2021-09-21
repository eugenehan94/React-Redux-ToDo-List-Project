let nextTodoId = 0;
export const addTodo = (text) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TODO",
      text: text,
      id: nextTodoId++,
    });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };
};

export const completedTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "COMPLETED_TODO",
      payload: id,
    });
  };
};
