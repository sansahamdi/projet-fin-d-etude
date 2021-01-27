import { SET_ALERT, REMOVE_ALERT } from "../action/Type";

const initialState = [];

const Reducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.msg !== payload.msg);
    default:
      return state;
  }
};

export default Reducer;
