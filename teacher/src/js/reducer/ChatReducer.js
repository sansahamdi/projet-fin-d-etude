import { CHAT_FAIL, CHAT_SUCCES, POST_MSG } from "../action/Type";

const initialState = {
  chats: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CHAT_SUCCES:
      return { ...state, chats: payload, loading: false };
    case CHAT_FAIL:
      return { ...state, chats: null, loading: false };
    case POST_MSG:
      return {
        ...state,
        chats: state.chats.map((chats) =>
          chats._id === payload.chatId
            ? { ...chats, msg: payload.msg }: chats),
            
        
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
