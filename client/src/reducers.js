export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return (state = action.currentUser);

    default:
      return state;
  }
};

export const flightsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SORT":
      state.sortBy = action.sortBy;
      return state;

    case "OUTBOUND":
      state.outbound = action.outbound;
      return state;

    case "RETURN":
      state.return = action.return;
      return state;

    default:
      return state;
  }
};
