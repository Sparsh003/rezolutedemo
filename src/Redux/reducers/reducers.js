const reducers = (state = { data: [], firstRender: true }, action) => {
  switch (action.type) {
    case "USER":
      const user = action.payload;
      return {
        data: [user, ...state.data],
      };
    case "RENDERING":
      const render = action.payload;
      return {
        ...state,
        firstRender: render,
      };
    default:
      return state;
  }
};

export default reducers;
