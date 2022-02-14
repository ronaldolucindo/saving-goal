const makeReducer = (reducerConfig = {}, initialState = {}) => {
  const reducer = (state, action) =>
    (reducerConfig[action.type] || ((val) => val))(state, action);

  return {
    reducer,
    initialState,
  };
};

export default makeReducer;
