export const addTodo = (text) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TODO",
      text: text,
    });
  };
};
