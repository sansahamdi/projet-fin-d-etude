import { MESSAGE_SUCCES, MESSAGE_FAIL } from "../action/Type";
const initialState = {
  msg: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case MESSAGE_SUCCES:
      return { ...state, msg: payload, loading: false };
    case MESSAGE_FAIL:
      return { ...state, msg: [], loading: false };
    default:
      return state;
  }
};

export default reducer;
