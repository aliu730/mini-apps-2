const dataReducer = (state = { data: [] }, action) => {
  if (action.type === 'CHANGE_DATA') {
    // console.log(action.data);
    return { ...state, data: action.data };
  }
  return state;
};

export default dataReducer;
