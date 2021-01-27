import { POST_FAIL, POST_SUCCES, DELETE_USER_POST } from "../action/Type";
const inialState = {
  userPost: null,
  loading: true,
};

const reducer = (state = inialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case POST_SUCCES:
      return {
        ...state,
        userPost: payload,
        loading: false,
      };
    case POST_FAIL:
      return { ...state, loading: false };
    case DELETE_USER_POST:
      return {
        ...state,
        userPost: state.userPost.filter((post) => post._id !== payload),
      };

    default:
      return state;
  }
};

export default reducer;
