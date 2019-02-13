const createReducer = (initialState, actionHandlers) => {
    return function reducer (state = initialState, action) {
        const handler = actionHandlers[action.type];
  
        return handler ? handler(state, action) : state;
    };
};

export default createReducer;
