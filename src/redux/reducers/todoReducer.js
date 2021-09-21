const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          complete: false,
        },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "COMPLETED_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    default:
      return state;
  }
};

export default reducer;
