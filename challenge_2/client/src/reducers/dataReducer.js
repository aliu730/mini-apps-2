const dataReducer = (state, action) => {
  if (action.type === 'CHANGE_DATA') {
    return action.data;
  }
  return state;
};

export default dataReducer;
